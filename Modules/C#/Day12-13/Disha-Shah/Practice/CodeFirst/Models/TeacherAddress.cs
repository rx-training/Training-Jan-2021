using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirst.Models
{
    public partial class TeacherAddress
    {
        public int TeacherAddressId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public int AddressOfTeacherId { get; set; }
        public Teacher Teacher { get; set; }
    }
}
