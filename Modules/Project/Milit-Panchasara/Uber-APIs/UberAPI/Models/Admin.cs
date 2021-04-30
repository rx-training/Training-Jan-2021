using System;
using System.Collections.Generic;
using UberAPI.Models.Auth;

#nullable disable

namespace UberAPI.Models
{
    public partial class Admin
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public decimal ContactNumber { get; set; }
        public string Password { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
        public AppUser User { get; set; }
        public string UserId { get; set; }
    }
}
