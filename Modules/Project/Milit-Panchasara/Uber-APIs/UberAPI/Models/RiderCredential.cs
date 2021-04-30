using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class RiderCredential
    {
        public long RiderId { get; set; }
        public string Password { get; set; }
        public bool? IsBlocked { get; set; }
        public bool? IsLoggedIn { get; set; }
        public DateTime? SessionExpiresIn { get; set; }
    }
}
