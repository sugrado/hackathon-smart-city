using FluentValidation;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Validations
{
    public class AddWasteCenterValidator : AbstractValidator<AddWasteCenterDto>
    {
        public AddWasteCenterValidator()
        {
            RuleFor(p => p.Email).NotEmpty().NotNull().WithMessage("E-posta zorunludur.");
            RuleFor(p => p.Address).NotEmpty().NotNull().WithMessage("Adres zorunludur.");
            RuleFor(p => p.Capacity).NotEmpty().NotNull().WithMessage("Kapasite zorunludur.");
            RuleFor(p => p.PhoneNumber).NotEmpty().NotNull().WithMessage("Telefon No zorunludur.");
            RuleFor(p => p.NeighbourhoodId).NotEmpty().NotNull().WithMessage("Mahalle zorunludur.");
        }
    }
}
