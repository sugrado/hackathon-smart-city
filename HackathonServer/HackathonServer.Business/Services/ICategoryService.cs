using HackathonServer.Business.Services.Core;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;

namespace HackathonServer.Business.Services
{
    public interface ICategoryService : IEntityRepository<Category>
    {
    }
    public class CategoryService : EfRepositoryBase<Category>, ICategoryService
    {
        private readonly HackathonServerDbContext _context;

        public CategoryService(HackathonServerDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
