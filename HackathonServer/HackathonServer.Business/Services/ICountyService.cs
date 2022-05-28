using HackathonServer.Business.Services.Core;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;

namespace HackathonServer.Business.Services
{
    public interface ICountyService : IEntityRepository<County>
    {
    }
    public class CountyService : EfRepositoryBase<County>, ICountyService
    {
        private readonly HackathonServerDbContext _context;

        public CountyService(HackathonServerDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
