using FluentValidation;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Validations
{
    public class AddNeighbourhoodValidator : AbstractValidator<AddNeighbourhoodDto>
    {
        public AddNeighbourhoodValidator()
        {
            RuleFor(p => p.Name).NotEmpty().NotNull().WithMessage("Mahalle ismi zorunludur.");
            RuleFor(p => p.CountyId).NotEmpty().NotNull().WithMessage("İlçe bilgisi zorunludur.");
        }
    }
}
