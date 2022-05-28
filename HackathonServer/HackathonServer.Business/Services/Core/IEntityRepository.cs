using HackathonServer.Core.Entities.Common;
using HackathonServer.Core.Utilities.Results;
using System.Linq.Expressions;

namespace HackathonServer.Business.Services.Core
{
    public interface IEntityRepository<TEntity> where TEntity : BaseEntity
    {
        Task<IDataResult<List<TEntity>>> GetAll(Expression<Func<TEntity, bool>> predicate = null);
        Task<IDataResult<TEntity>> GetById(int id);
        Task<IDataResult<TEntity>> Create(TEntity entity);
        Task<IResult> Update(TEntity entity);
        Task<IResult> Delete(TEntity entity);
    }
}
