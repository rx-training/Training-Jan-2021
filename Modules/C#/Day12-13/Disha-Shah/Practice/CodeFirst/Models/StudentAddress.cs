using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirst.Models
{
    public partial class StudentAddress
    {
        public int StudentAddressId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        // Convention (One to One)
        public int StudentId { get; set; }
        public Student Student { get; set; }
    }
}
