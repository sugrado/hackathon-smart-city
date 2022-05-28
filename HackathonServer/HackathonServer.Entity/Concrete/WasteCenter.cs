using HackathonServer.Core.Entities.Common;

namespace HackathonServer.Entity.Concrete
{
    public class WasteCenter : BaseEntity
    {
        public int NeighbourhoodId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public double Capacity { get; set; }
        public double UsedCapacity { get; set; }
        public short PercentageOfCapacity { get; set; }
        public Neighbourhood Neighbourhood { get; set; }
        public List<WasteRecord> WasteRecords { get; set; }
    }
}
