using HackathonServer.Core.Entities.Common;
using HackathonServer.Core.Utilities.Results;
using HackathonServer.DataAccess.Concrete;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace HackathonServer.Business.Services.Core
{
    public class EfRepositoryBase<TEntity> : IEntityRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly HackathonServerDbContext _context;

        public EfRepositoryBase(HackathonServerDbContext context)
        {
            _context = context;
        }

        public virtual async Task<IDataResult<TEntity>> Create(TEntity entity)
        {
            _context.Add(entity);
            await _context.SaveChangesAsync();
            return new SuccessDataResult<TEntity>(entity, "Başarılı");
        }

        public virtual async Task<IDataResult<List<TEntity>>> GetAll(Expression<Func<TEntity, bool>> predicate = null)
        {
            var result = predicate == null ?
                await _context.Set<TEntity>().ToListAsync() :
                await _context.Set<TEntity>().Where(predicate).ToListAsync();
            return new SuccessDataResult<List<TEntity>>(result, "Başarılı");
        }

        public virtual async Task<IDataResult<TEntity>> GetById(int id)
        {
            var result = await _context.Set<TEntity>().FirstOrDefaultAsync(p => p.Id == id);
            if (result is null)
                return new ErrorDataResult<TEntity>(result, "Kayıt bulunamadı");
            return new SuccessDataResult<TEntity>(result, "Başarılı");
        }

        public virtual async Task<IResult> Update(TEntity entity)
        {
            var checkEntity = await _context
                .Set<TEntity>()
                .Where(p => p.Id == entity.Id &&
                            !p.Deleted)
                .AnyAsync();

            if (!checkEntity)
                return new ErrorResult("Güncellemeye çalıştığınız kayıt bulunamadı");

            _context.Set<TEntity>().Update(entity);
            await _context.SaveChangesAsync();
            return new SuccessResult("Kayıt güncellendi");
        }

        public virtual async Task<IResult> Delete(TEntity entity)
        {
            var checkEntity = await _context
                .Set<TEntity>()
                .Where(p => p.Id == entity.Id &&
                            !p.Deleted)
                .AnyAsync();

            if (!checkEntity)
                return new ErrorResult("Silmeye çalıştığınız kayıt bulunamadı");

            _context.Set<TEntity>().Remove(entity);
            await _context.SaveChangesAsync();
            return new SuccessResult("Kayıt silindi");
        }
    }
}
