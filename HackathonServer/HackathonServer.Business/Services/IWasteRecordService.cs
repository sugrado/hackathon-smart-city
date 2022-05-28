using HackathonServer.Business.Services.Core;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;

namespace HackathonServer.Business.Services
{
    public interface IWasteRecordService : IEntityRepository<WasteRecord>
    {
    }
    public class WasteRecordService : EfRepositoryBase<WasteRecord>, IWasteRecordService
    {
        private readonly HackathonServerDbContext _context;

        public WasteRecordService(HackathonServerDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
