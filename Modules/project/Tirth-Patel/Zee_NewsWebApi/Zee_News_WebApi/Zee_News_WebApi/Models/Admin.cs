using System;
using System.Collections.Generic;

#nullable disable

namespace Zee_News_WebApi.Models
{
    public partial class Admin
    {
        public string UserId { get; set; }
        public string Password { get; set; }

        public virtual User User { get; set; }
    }
}
