using HackathonServer.Core.Entities.Common;

namespace HackathonServer.Entity.Concrete
{
    public class WasteRecord : BaseEntity
    {
        public int CitizenId { get; set; }
        public int CountyId { get; set; }
        public int CategoryId { get; set; }
        public short UnitSize { get; set; }
        public County County { get; set; }
        public User Citizen { get; set; }
    }
}
