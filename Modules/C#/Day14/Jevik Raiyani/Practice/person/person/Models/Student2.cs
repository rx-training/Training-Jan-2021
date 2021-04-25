using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Student2
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public DateTime? Dob { get; set; }
        public int? Standard { get; set; }
    }
}
