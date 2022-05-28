using FluentValidation.AspNetCore;
using HackathonServer.Business.DependencyResolvers;
using HackathonServer.Business.Validations;
using HackathonServer.Core.Utilities.Extensions;
using HackathonServer.DataAccess.Concrete;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<HackathonServerDbContext>(o =>
{
    o.UseNpgsql("User ID=postgres;Password=123456;Host=localhost;Port=5432;Database=hackathon_server;");
});
builder.Services.AddScoped<HackathonServerDbContext>();
builder.Services.AddServiceRegistrations();
builder.Services.AddFluentValidation(opt =>
{
    opt.RegisterValidatorsFromAssemblyContaining<AddNeighbourhoodValidator>();
});
builder.Services.UseCustomValidationResponse();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
