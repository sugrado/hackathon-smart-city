using HackathonServer.Core.Utilities.Results;
using HackathonServer.Entity.Concrete;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Services
{
    public interface IAuthService
    {
        Task<IResult> Register(UserRegisterDto userRegisterDto);
        Task<IDataResult<User>> Login(UserLoginDto userForLoginDto);
        Task<IResult> UserExist(string email, string identityNumber);
    }

    public class AuthService : IAuthService
    {
        private readonly IUserService _userService;

        public AuthService(IUserService userService)
        {
            _userService = userService;
        }

        public async Task<IDataResult<User>> Login(UserLoginDto userForLoginDto)
        {
            var userToCheck = (await _userService.GetByMail(userForLoginDto.Email)).Data;
            if (userToCheck == null)
                return new ErrorDataResult<User>("Kullanıcı bulunamadı.");

            if (userForLoginDto.Password != userToCheck.Password)
                return new ErrorDataResult<User>("Şifre hatalı.");

            return new SuccessDataResult<User>(userToCheck, "Giriş Başarılı");
        }

        public async Task<IResult> Register(UserRegisterDto userRegisterDto)
        {
            var checkUserExist = await UserExist(userRegisterDto.Email, userRegisterDto.IdentityNumber);
            if (!checkUserExist.Success)
                return new ErrorResult(checkUserExist.Message);

            var user = new User
            {
                Name = userRegisterDto.FirstName,
                Surname = userRegisterDto.LastName,
                FullName = userRegisterDto.FirstName + " " + userRegisterDto.LastName,
                IdentityNumber = userRegisterDto.IdentityNumber,
                Email = userRegisterDto.Email,
                TypeId = UserType.Citizen,
                // Shit code
                Password = userRegisterDto.Password
            };

            await _userService.Create(user);
            return new SuccessResult("Kaydolma işlemi başarılı.");
        }

        public async Task<IResult> UserExist(string email, string identityNumber)
        {
            if ((await _userService.GetByMail(email)).Success)
                return new ErrorResult("Bu e-postaya ait bir kullanıcı sisteme daha önceden kayıt olmuş.");
            if ((await _userService.GetByIdentityNumber(identityNumber)).Success)
                return new ErrorResult("Bu kimlik numarasına ait bir kullanıcı sisteme daha önceden kayıt olmuş.");

            return new SuccessResult();
        }
    }
}
