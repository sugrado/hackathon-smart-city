using HackathonServer.Business.Services.Core;
using HackathonServer.Core.Entities.Common;
using HackathonServer.DataAccess.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace HackathonServer.WebAPI.Controllers.Common
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseEntityController<TEntity> : ControllerBase where TEntity : BaseEntity
    {
        private readonly HackathonServerDbContext _context;
        private readonly IEntityRepository<TEntity> _service;

        public BaseEntityController(HackathonServerDbContext context, IEntityRepository<TEntity> service)
        {
            _context = context;
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Create(TEntity entity)
        {
            var result = await _service.Create(entity);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPut]
        public async Task<IActionResult> Update(TEntity entity)
        {
            var result = await _service.Update(entity);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(TEntity entity)
        {
            var result = await _service.Delete(entity);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAll(p => !p.Deleted);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var result = await _service.GetById(id);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
