using HackathonServer.Business.Services.Core;
using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Services
{
    public interface IWasteRecordService : IEntityRepository<WasteRecord>
    {
        Task<IDataResult<WasteRecord>> AddWasteRecord(AddWasteRecordDto addWasteRecordDto);
    }

    public class WasteRecordService : EfRepositoryBase<WasteRecord>, IWasteRecordService
    {
        private readonly HackathonServerDbContext _context;
        private readonly IUserService _userService;
        private readonly IWasteCenterService _wasteCenterService;

        public WasteRecordService(HackathonServerDbContext context,
            IUserService userService,
            IWasteCenterService wasteCenterService) : base(context)
        {
            _context = context;
            _userService = userService;
            _wasteCenterService = wasteCenterService;
        }

        public async Task<IDataResult<WasteRecord>> AddWasteRecord(AddWasteRecordDto addWasteRecordDto)
        {
            var citizen = await _userService.GetByIdentityNumber(addWasteRecordDto.CitizenIdentityNumber);
            if (!citizen.Success)
                return new ErrorDataResult<WasteRecord>(citizen.Message);

            var result = await Create(new WasteRecord
            {
                UnitSize = addWasteRecordDto.UnitSize,
                CategoryId = addWasteRecordDto.CategoryId,
                CitizenId = citizen.Data.Id,
                WasteCenterId = addWasteRecordDto.WasteCenterId,
            });

            var wasteCenter = await _wasteCenterService.GetById(addWasteRecordDto.WasteCenterId);

            if (!wasteCenter.Success)
                return new ErrorDataResult<WasteRecord>(result.Message);

            wasteCenter.Data.UsedCapacity += addWasteRecordDto.UnitSize;
            wasteCenter.Data.PercentageOfCapacity =
                decimal.ToInt16((Math.Round((decimal)((100 / wasteCenter.Data.Capacity) * wasteCenter.Data.UsedCapacity),
                MidpointRounding.AwayFromZero)));

            if (wasteCenter.Data.PercentageOfCapacity > 100)
                wasteCenter.Data.PercentageOfCapacity = 100;

            await _wasteCenterService.Update(wasteCenter.Data);

            if (result.Success)
                return new SuccessDataResult<WasteRecord>(result.Data, result.Message);

            return new ErrorDataResult<WasteRecord>(result.Message);
        }
    }
}
