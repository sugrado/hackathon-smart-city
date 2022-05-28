using HackathonServer.Core.Entities.Common;

namespace HackathonServer.Entity.Concrete
{
    public class Neighbourhood : BaseEntity
    {
        public int CountyId { get; set; }
        public string Name { get; set; }
        public County County { get; set; }
        public ICollection<WasteCenter> WasteCenters { get; set; }
    }
}
