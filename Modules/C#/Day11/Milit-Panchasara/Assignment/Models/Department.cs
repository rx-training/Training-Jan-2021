using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Department
    {
        public Department()
        {
            Patients = new HashSet<Patient>();
            staff = new HashSet<Staff>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
        public virtual ICollection<Staff> staff { get; set; }
    }
}
