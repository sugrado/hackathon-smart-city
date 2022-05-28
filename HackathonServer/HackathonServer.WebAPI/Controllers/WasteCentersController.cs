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
    public class WasteCentersController : BaseEntityController<WasteCenter>
    {
        private readonly HackathonServerDbContext _context;
        private readonly IWasteCenterService _service;

        public WasteCentersController(HackathonServerDbContext context, IWasteCenterService service) : base(context, service)
        {
            _context = context;
            _service = service;
        }

        [HttpPost("addWasteCenter")]
        public async Task<IActionResult> AddWasteCenter(AddWasteCenterDto addWasteCenterDto)
        {
            var result = await _service.AddWasteCenter(addWasteCenterDto);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
