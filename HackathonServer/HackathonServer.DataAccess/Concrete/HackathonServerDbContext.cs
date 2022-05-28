using HackathonServer.Core.Entities.Common;
using HackathonServer.Entity.Concrete;
using Microsoft.EntityFrameworkCore;

namespace HackathonServer.DataAccess.Concrete
{
    public class HackathonServerDbContext : DbContext
    {
        public HackathonServerDbContext(DbContextOptions options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<County> Counties { get; set; }
        public DbSet<Neighbourhood> Neighbourhoods { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<WasteRecord> WasteRecords { get; set; }
        public DbSet<WasteCenter> WasteCenters { get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var datas = ChangeTracker.Entries<BaseEntity>();
            DateTime now = DateTime.Now;
            foreach (var data in datas)
            {
                switch (data.State)
                {
                    case EntityState.Deleted:
                        data.Entity.Deleted = true;
                        data.Entity.ModifiedAt = now;
                        break;
                    case EntityState.Modified:
                        data.Entity.ModifiedAt = now;
                        break;
                    case EntityState.Added:
                        data.Entity.CreatedAt = now;
                        break;
                    default:
                        break;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
