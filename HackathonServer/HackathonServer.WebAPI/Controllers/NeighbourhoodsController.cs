using HackathonServer.Business.Services;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;
using HackathonServer.WebAPI.Controllers.Common;
using Microsoft.AspNetCore.Mvc;

namespace HackathonServer.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NeighbourhoodsController : BaseEntityController<Neighbourhood>
    {
        private readonly HackathonServerDbContext _context;
        private readonly INeighbourhoodService _service;

        public NeighbourhoodsController(HackathonServerDbContext context, INeighbourhoodService service) : base(context, service)
        {
            _context = context;
            _service = service;
        }

        [HttpPost("addNeighbourhood")]
        public async Task<IActionResult> AddNeighbourhood(AddNeighbourhoodDto addNeighbourhoodDto)
        {
            var result = await _service.AddNeighbourhood(addNeighbourhoodDto);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
