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
    public class WasteRecordsController : BaseEntityController<WasteRecord>
    {
        private readonly HackathonServerDbContext _context;
        private readonly IWasteRecordService _service;

        public WasteRecordsController(HackathonServerDbContext context, IWasteRecordService service) : base(context, service)
        {
            _context = context;
            _service = service;
        }

        [HttpPost("addWasteRecord")]
        public async Task<IActionResult> AddWasteCenter(AddWasteRecordDto addWasteRecordDto)
        {
            var result = await _service.AddWasteRecord(addWasteRecordDto);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPost("bulkInsert")]
        public async Task<IActionResult> BulkInsert([FromBody]List<AddWasteRecordDto> addWasteRecordDtos)
        {
            var result = await _service.BulkInsert(addWasteRecordDtos);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
