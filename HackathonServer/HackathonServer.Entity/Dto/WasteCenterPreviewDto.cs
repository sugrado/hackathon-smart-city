using HackathonServer.Entity.Concrete;

namespace HackathonServer.Entity.Dto
{
    public class WasteCenterPreviewDto
    {
        public WasteCenter WasteCenter { get; set; }
        public IEnumerable<User> Users { get; set; }
    }
}
