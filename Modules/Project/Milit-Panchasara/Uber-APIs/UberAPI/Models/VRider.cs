using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class VRider
    {
        public long RiderId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string InviteCode { get; set; }
        public decimal ContactNumber { get; set; }
        public string Country { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
