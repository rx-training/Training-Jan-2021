using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Department
    {
        public Department()
        {
            Doctors = new HashSet<Doctor>();
            Nurses = new HashSet<Nurse>();
            Patients = new HashSet<Patient>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

        public virtual ICollection<Doctor> Doctors { get; set; }
        public virtual ICollection<Nurse> Nurses { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
