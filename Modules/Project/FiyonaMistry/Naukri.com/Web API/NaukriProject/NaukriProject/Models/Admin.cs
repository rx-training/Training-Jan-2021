using NaukriProject.Authentication;
using System;
using System.Collections.Generic;

#nullable disable

namespace NaukriProject.Models
{
    public partial class Admin
    {
        public int AdminId { get; set; }
        public string AdminFirstName { get; set; }
        public string AdminLastName { get; set; }
        public string AdminEmail { get; set; }
        public string AdminPassword { get; set; }
        public long AdminPhoneNumber { get; set; }

        public string Id { get; set; }
        public ApplicationUser UserId { get; set; }
    }
}
