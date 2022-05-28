using HackathonServer.Business.Services;
using HackathonServer.Entity.Dto;
using Microsoft.AspNetCore.Mvc;

namespace HackathonServer.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterDto userRegisterDto)
        {
            var result = await _service.Register(userRegisterDto);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto userLoginDto)
        {
            var result = await _service.Login(userLoginDto);
            if (result.Success)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
