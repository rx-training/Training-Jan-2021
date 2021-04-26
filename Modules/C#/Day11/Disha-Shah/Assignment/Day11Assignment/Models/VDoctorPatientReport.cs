using System;
using System.Collections.Generic;

#nullable disable

namespace Day11Assignment.Models
{
    public partial class VDoctorPatientReport
    {
        public string Patient { get; set; }
        public int? Contact { get; set; }
        public int? Age { get; set; }
        public string ProblemDesc { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
        public string HealthCarePerson { get; set; }
        public string Doctor { get; set; }
    }
}
