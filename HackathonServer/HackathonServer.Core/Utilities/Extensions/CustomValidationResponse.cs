using HackathonServer.Core.Utilities.Results;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace HackathonServer.Core.Utilities.Extensions
{
    public static class CustomValidationResponse
    {
        public static void UseCustomValidationResponse(this IServiceCollection services)
        {
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = context =>
                {
                    var errors = context.ModelState.Values.Where(p => p.Errors.Count > 0).SelectMany(p => p.Errors).Select(p => p.ErrorMessage);
                    ErrorDto errorDto = new ErrorDto(errors.ToList());
                    var response = new Response(errorDto);
                    return new BadRequestObjectResult(response);
                };
            });
        }
    }
}
