using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class Admin
    {
        public int AdminId { get; set; }
        public string AdminLoginId { get; set; }
        public string AdminPassword { get; set; }
        public string AdminFullName { get; set; }
        public string AdminContactNumber { get; set; }
        public string AdminAddress { get; set; }
        public string AdminEmail { get; set; }
        public string AdminAuthority { get; set; }
        public DateTime? AdminDate { get; set; }
    }
}
