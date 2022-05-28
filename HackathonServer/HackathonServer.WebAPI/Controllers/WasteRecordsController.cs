using HackathonServer.Business.Services;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
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
    }
}
