using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using Microsoft.EntityFrameworkCore;

namespace HackathonServer.Business.Services
{
    public interface IUserService
    {
        Task<IDataResult<User>> GetByMail(string email);
        Task<IDataResult<User>> GetByIdentityNumber(string identityNumber);
        Task<IDataResult<User>> Create(User user);
        Task<IDataResult<List<User>>> SortByScore();
    }

    public class UserService : IUserService
    {
        private readonly HackathonServerDbContext _context;

        public UserService(HackathonServerDbContext context)
        {
            _context = context;
        }

        public async Task<IDataResult<List<User>>> SortByScore()
            => new SuccessDataResult<List<User>>(
                await _context.Users.OrderByDescending(p => p.Score).ToListAsync(), "Başarılı");

        public async Task<IDataResult<User>> Create(User user)
        {
            if (user.IdentityNumber == default || user.Email == default)
                return new ErrorDataResult<User>();
            _context.Add(user);
            await _context.SaveChangesAsync();
            return new SuccessDataResult<User>(user, "Kullanıcı eklendi.");
        }

        public async Task<IDataResult<User>> GetByIdentityNumber(string identityNumber)
        {
            var user = await _context
                .Users
                .AsNoTracking()
                .Where(p => !p.Deleted &&
                            p.IdentityNumber == identityNumber)
                .FirstOrDefaultAsync();

            if (user is null)
                return new ErrorDataResult<User>("Kullanıcı bulunamadı.");
            return new SuccessDataResult<User>(user, "Kullanıcı bulundu.");
        }

        public async Task<IDataResult<User>> GetByMail(string email)
        {
            var user = await _context
                .Users
                .AsNoTracking()
                .Where(p => !p.Deleted &&
                            p.Email == email)
                .FirstOrDefaultAsync();

            if (user is null)
                return new ErrorDataResult<User>("Kullanıcı bulunamadı.");
            return new SuccessDataResult<User>(user, "Kullanıcı bulundu.");
        }
    }
}
