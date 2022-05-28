using HackathonServer.Business.Services;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.WebAPI.Controllers.Common;
using Microsoft.AspNetCore.Mvc;

namespace HackathonServer.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : BaseEntityController<Category>
    {
        private readonly HackathonServerDbContext _context;
        private readonly ICategoryService _service;

        public CategoriesController(HackathonServerDbContext context, ICategoryService service) : base(context, service)
        {
            _context = context;
            _service = service;
        }
    }
}
