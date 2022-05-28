using FluentValidation;
using HackathonServer.Entity.Dto;

namespace HackathonServer.Business.Validations
{
    public class AddWasteRecordValidator : AbstractValidator<AddWasteRecordDto>
    {
        public AddWasteRecordValidator()
        {
            RuleFor(p => p.WasteCenterId).NotEmpty().NotNull().WithMessage("Atık merkezi zorunludur.");
            RuleFor(p => p.CitizenIdentityNumber).NotEmpty().NotNull().WithMessage("Vatandaş TCKN zorunludur.");
            RuleFor(p => p.CategoryId).NotEmpty().NotNull().WithMessage("Kategori zorunludur.");
            RuleFor(p => p.UnitSize).NotEmpty().NotNull().WithMessage("Atık ağırlığı zorunludur.");
        }
    }
}
