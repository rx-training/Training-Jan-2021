using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class AdminDetail
    {
        public int AdmintId { get; set; }
        public string AdminFirstName { get; set; }
        public string AdminMiddleName { get; set; }
        public string AdminLastName { get; set; }
        public string AdminEmail { get; set; }
        public double AdminMobileNumber { get; set; }
        public string AdminCode { get; set; }
        public string AdminPassword { get; set; }
    }
}
