namespace HackathonServer.Core.Entities.Common
{
    public class BaseEntity
    {
        public int Id { get; set; }
        public bool Deleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
