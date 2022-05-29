using HackathonServer.Business.Services.Core;
using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;
using Microsoft.EntityFrameworkCore;

namespace HackathonServer.Business.Services
{
    public interface IWasteCenterService : IEntityRepository<WasteCenter>
    {
        Task<IDataResult<WasteCenter>> AddWasteCenter(AddWasteCenterDto addWasteCenterDto);
        Task<IDataResult<WasteCenterPreviewDto>> GetWasteCentersWithRecords(int wasteCenterId);
    }
    public class WasteCenterService : EfRepositoryBase<WasteCenter>, IWasteCenterService
    {
        private readonly HackathonServerDbContext _context;

        public WasteCenterService(HackathonServerDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IDataResult<WasteCenter>> AddWasteCenter(AddWasteCenterDto addWasteCenterDto)
        {
            var neighbourhoodName = await _context
                .Neighbourhoods
                .AsNoTracking()
                .Where(p => !p.Deleted &&
                            p.Id == addWasteCenterDto.NeighbourhoodId)
                .Select(p => p.Name)
                .FirstOrDefaultAsync();

            var result = await Create(new WasteCenter
            {
                Email = addWasteCenterDto.Email,
                Name = neighbourhoodName + " Atık Merkezi",
                Address = addWasteCenterDto.Address,
                Capacity = addWasteCenterDto.Capacity,
                NeighbourhoodId = addWasteCenterDto.NeighbourhoodId,
                PhoneNumber = addWasteCenterDto.PhoneNumber
            });

            if (result.Success)
                return new SuccessDataResult<WasteCenter>(result.Data, result.Message);

            return new ErrorDataResult<WasteCenter>(result.Message);
        }

        public async Task<IDataResult<WasteCenterPreviewDto>> GetWasteCentersWithRecords(int wasteCenterId)
        {
            var now = DateTime.Now;
            var result = await _context
                .WasteCenters
                .AsNoTracking()
                .Where(p => !p.Deleted &&
                            p.Id == wasteCenterId)
                .Select(p => new WasteCenterPreviewDto
                {
                    WasteCenter = p,
                    Users = p.WasteRecords.Select(c => c.Citizen).Distinct()
                })
                .FirstOrDefaultAsync();

            return new SuccessDataResult<WasteCenterPreviewDto>(result, "Başarılı");
        }
    }
}
