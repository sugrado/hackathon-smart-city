using HackathonServer.Business.Services;
using HackathonServer.Business.Services.Core;
using Microsoft.Extensions.DependencyInjection;

namespace HackathonServer.Business.DependencyResolvers
{
    public static class ServiceRegistration
    {
        public static void AddServiceRegistrations(this IServiceCollection services)
        {
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ICountyService, CountyService>();
            services.AddScoped<INeighbourhoodService, NeighbourhoodService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IWasteCenterService, WasteCenterService>();
            services.AddScoped<IWasteRecordService, WasteRecordService>();
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped(typeof(IEntityRepository<>), typeof(EfRepositoryBase<>));
        }
    }
}
