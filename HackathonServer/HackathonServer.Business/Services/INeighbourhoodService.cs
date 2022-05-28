using HackathonServer.Business.Services.Core;
using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Services
{
    public interface INeighbourhoodService : IEntityRepository<Neighbourhood>
    {
        Task<IDataResult<Neighbourhood>> AddNeighbourhood(AddNeighbourhoodDto addNeighbourhoodDto);
    }

    public class NeighbourhoodService : EfRepositoryBase<Neighbourhood>, INeighbourhoodService
    {
        public NeighbourhoodService(HackathonServerDbContext context) : base(context)
        {
        }

        public async Task<IDataResult<Neighbourhood>> AddNeighbourhood(AddNeighbourhoodDto addNeighbourhoodDto)
        {
            var result = await Create(new Neighbourhood
            {
                CountyId = addNeighbourhoodDto.CountyId,
                Name = addNeighbourhoodDto.Name
            });

            if (result.Success)
                return new SuccessDataResult<Neighbourhood>(result.Data, result.Message);

            return new ErrorDataResult<Neighbourhood>(result.Message);
        }
    }
}
