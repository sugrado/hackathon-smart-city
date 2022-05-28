using HackathonServer.Business.Services.Core;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;

namespace HackathonServer.Business.Services
{
    public interface IWasteCenterService : IEntityRepository<WasteCenter>
    {
    }
    public class WasteCenterService : EfRepositoryBase<WasteCenter>, IWasteCenterService
    {
        private readonly HackathonServerDbContext _context;

        public WasteCenterService(HackathonServerDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
