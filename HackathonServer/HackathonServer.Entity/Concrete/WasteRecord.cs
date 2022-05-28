using HackathonServer.Core.Entities.Common;

namespace HackathonServer.Entity.Concrete
{
    public class WasteRecord : BaseEntity
    {
        public int CitizenId { get; set; }
        public int CategoryId { get; set; }
        public int WasteCenterId { get; set; }
        public double UnitSize { get; set; }
        public User Citizen { get; set; }
        public Category Category { get; set; }
        public WasteCenter WasteCenter { get; set; }
    }
}
