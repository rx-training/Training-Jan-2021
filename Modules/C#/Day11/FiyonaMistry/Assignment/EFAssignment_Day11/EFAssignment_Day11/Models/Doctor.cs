using System;
using System.Collections.Generic;

#nullable disable

namespace EFAssignment_Day11.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            Assistants = new HashSet<Assistant>();
            Patients = new HashSet<Patient>();
            Prescriptions = new HashSet<Prescription>();
        }

        public int DocId { get; set; }
        public string DocFname { get; set; }
        public string DocLname { get; set; }
        public int DocPhoneNumber { get; set; }
        public string DocQualification { get; set; }
        public string DocAddress { get; set; }
        public string DocSpecialist { get; set; }
        public int DeptId { get; set; }

        public virtual Department Dept { get; set; }
        public virtual ICollection<Assistant> Assistants { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
        public virtual ICollection<Prescription> Prescriptions { get; set; }
    }
}
