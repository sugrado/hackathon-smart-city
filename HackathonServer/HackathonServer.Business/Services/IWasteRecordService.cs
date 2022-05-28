using HackathonServer.Business.Services.Core;
using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;
using Microsoft.EntityFrameworkCore;

namespace HackathonServer.Business.Services
{
    public interface IWasteRecordService : IEntityRepository<WasteRecord>
    {
        Task<IDataResult<WasteRecord>> AddWasteRecord(AddWasteRecordDto addWasteRecordDto);
        Task<IResult> BulkInsert(List<AddWasteRecordDto> addWasteRecordDtos);
    }

    public class WasteRecordService : EfRepositoryBase<WasteRecord>, IWasteRecordService
    {
        private readonly HackathonServerDbContext _context;
        private readonly IUserService _userService;

        public WasteRecordService(HackathonServerDbContext context,
            IUserService userService) : base(context)
        {
            _context = context;
            _userService = userService;
        }

        public async Task<IDataResult<WasteRecord>> AddWasteRecord(AddWasteRecordDto addWasteRecordDto)
        {
            var citizen = await _userService.GetByIdentityNumber(addWasteRecordDto.CitizenIdentityNumber);
            if (!citizen.Success)
                return new ErrorDataResult<WasteRecord>(citizen.Message);

            await _context.WasteRecords.AddAsync(new WasteRecord
            {
                UnitSize = addWasteRecordDto.UnitSize,
                CategoryId = addWasteRecordDto.CategoryId,
                CitizenId = citizen.Data.Id,
                WasteCenterId = addWasteRecordDto.WasteCenterId,
            });

            var wasteCenter = await _context
                .WasteCenters
                .Where(p => p.Id == addWasteRecordDto.WasteCenterId)
                .FirstOrDefaultAsync();

            if (wasteCenter == null)
                return new ErrorDataResult<WasteRecord>("Atık merkezi bilgisine ulaşılamadı.");

            if (wasteCenter.UsedCapacity >= wasteCenter.Capacity)
                return new ErrorDataResult<WasteRecord>("Atık merkezinin kapasitesi doldu..");

            wasteCenter.UsedCapacity += addWasteRecordDto.UnitSize;
            wasteCenter.PercentageOfCapacity =
                decimal.ToInt16((Math.Round((decimal)((100 / wasteCenter.Capacity) * wasteCenter.UsedCapacity),
                MidpointRounding.AwayFromZero)));

            var categoryCoefficient = await _context
                .Categories
                .AsNoTracking()
                .Where(p => p.Id == addWasteRecordDto.CategoryId)
                .Select(p => p.Coefficient)
                .FirstOrDefaultAsync();

            if (categoryCoefficient == default)
                return new ErrorDataResult<WasteRecord>("Kategoriye ait çarpım katsayısı bilgisi girilmemiş.");

            citizen.Data.Score += categoryCoefficient * addWasteRecordDto.UnitSize;

            if (wasteCenter.PercentageOfCapacity > 100)
                wasteCenter.PercentageOfCapacity = 100;

            _context.Users.Update(citizen.Data);
            _context.WasteCenters.Update(wasteCenter);
            await _context.SaveChangesAsync();

            return new SuccessDataResult<WasteRecord>("Kayıt başarıyla eklendi.");
        }

        public async Task<IResult> BulkInsert(List<AddWasteRecordDto> addWasteRecordDtos)
        {
            foreach (var addWasteRecordDto in addWasteRecordDtos)
            {
                if (addWasteRecordDto.CategoryId == default ||
                    addWasteRecordDto.WasteCenterId == default ||
                    addWasteRecordDto.CitizenIdentityNumber == default ||
                    addWasteRecordDto.UnitSize == default)
                {
                    continue;
                }
                await AddWasteRecord(addWasteRecordDto);
            }

            return new SuccessResult("Atıklar kaydedildi.");
        }
    }
}
