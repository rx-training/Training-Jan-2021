using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public DateTime Dob { get; set; }
        public int TotalScore { get; set; }
        public string City { get; set; }
    }
}
