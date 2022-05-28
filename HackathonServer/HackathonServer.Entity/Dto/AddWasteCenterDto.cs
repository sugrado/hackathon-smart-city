namespace HackathonServer.Entity.Dto
{
    public class AddWasteCenterDto
    {
        public int NeighbourhoodId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int Capacity { get; set; }
    }
}
