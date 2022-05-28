using HackathonServer.Business.Services;
using HackathonServer.DataAccess.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace HackathonServer.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly HackathonServerDbContext _context;
        private readonly IUserService _service;

        public UsersController(HackathonServerDbContext context, IUserService service)
        {
            _context = context;
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> SortByScore() => Ok(await _service.SortByScore());

        [HttpGet("{identityNumber}")]
        public async Task<IActionResult> GetById([FromRoute] string identityNumber)
            => Ok(await _service.GetByIdentityNumber(identityNumber));
    }
}
