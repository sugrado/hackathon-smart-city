using HackathonServer.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackathonServer.Entity.Dto
{
    public class WasteCenterPreviewDto
    {
        public WasteCenter WasteCenter { get; set; }
        public IEnumerable<User> Users { get; set; }
    }
}
