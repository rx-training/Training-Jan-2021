using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAssignment.Models
{
    public partial class Department
    {
        public Department()
        {
            Patients = new HashSet<Patient>();
            staff = new HashSet<staff>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Patient> Patients { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<staff> staff { get; set; }
    }
}
