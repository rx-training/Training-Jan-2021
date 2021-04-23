using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class Nurse
    {
        public Nurse()
        {
            Patients = new HashSet<Patient>();
        }

        public int NurseId { get; set; }
        public int? DepartmentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
