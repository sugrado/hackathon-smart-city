using HackathonServer.Business.Services;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.WebAPI.Controllers.Common;
using Microsoft.AspNetCore.Mvc;

namespace HackathonServer.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountiesController : BaseEntityController<County>
    {
        private readonly HackathonServerDbContext _context;
        private readonly ICountyService _service;

        public CountiesController(HackathonServerDbContext context, ICountyService service) : base(context, service)
        {
            _context = context;
            _service = service;
        }
    }
}
