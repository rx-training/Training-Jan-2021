using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Admin
    {
        public int AdminId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ContactNo { get; set; }
        public string Password { get; set; }
    }
}
