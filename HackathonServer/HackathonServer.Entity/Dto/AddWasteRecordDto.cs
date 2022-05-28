namespace HackathonServer.Entity.Dto
{
    public class AddWasteRecordDto
    {
        public string CitizenIdentityNumber { get; set; }
        public int CategoryId { get; set; }
        public int WasteCenterId { get; set; }
        public double UnitSize { get; set; }
    }
}
