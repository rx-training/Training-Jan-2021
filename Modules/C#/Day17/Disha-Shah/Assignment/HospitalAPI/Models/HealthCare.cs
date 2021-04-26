using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAPI.Models
{
    public partial class HealthCare
    {
        public HealthCare()
        {
            Patients = new HashSet<Patient>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public string Address { get; set; }
        public int? Contact { get; set; }
        public int? Age { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
