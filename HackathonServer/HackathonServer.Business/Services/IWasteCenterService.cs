using HackathonServer.Business.Services.Core;
using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Services
{
    public interface IWasteCenterService : IEntityRepository<WasteCenter>
    {
        Task<IDataResult<WasteCenter>> AddWasteCenter(AddWasteCenterDto addWasteCenterDto);
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
            var result = await Create(new WasteCenter
            {
                Email = addWasteCenterDto.Email,
                Name = addWasteCenterDto.Name,
                Address = addWasteCenterDto.Address,
                Capacity = addWasteCenterDto.Capacity,
                NeighbourhoodId = addWasteCenterDto.NeighbourhoodId,
                PhoneNumber = addWasteCenterDto.PhoneNumber
            });

            if (result.Success)
                return new SuccessDataResult<WasteCenter>(result.Data, result.Message);

            return new ErrorDataResult<WasteCenter>(result.Message);
        }
    }
}
