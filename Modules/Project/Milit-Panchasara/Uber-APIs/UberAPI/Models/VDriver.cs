using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class VDriver
    {
        public long DriverId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public decimal ContactNumber { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
