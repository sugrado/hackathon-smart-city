using HackathonServer.Business.Services.Core;
using HackathonServer.DataAccess.Concrete;
using HackathonServer.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackathonServer.Business.Services
{
    public interface INeighbourhoodService : IEntityRepository<Neighbourhood>
    {
    }

    public class NeighbourhoodService : EfRepositoryBase<Neighbourhood>, INeighbourhoodService
    {
        public NeighbourhoodService(HackathonServerDbContext context) : base(context)
        {
        }
    }
}
