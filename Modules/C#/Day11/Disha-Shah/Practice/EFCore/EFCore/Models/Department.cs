using System;
using System.Collections.Generic;

#nullable disable

namespace EFCore.Models
{
    public partial class Department
    {
        public Department()
        {
            Doctors = new HashSet<Doctor>();
            HealthCares = new HashSet<HealthCare>();
            Patients = new HashSet<Patient>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Doctor> Doctors { get; set; }
        public virtual ICollection<HealthCare> HealthCares { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
