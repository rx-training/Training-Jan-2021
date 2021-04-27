using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalDBAPI.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            PatientsDoctors = new HashSet<PatientsDoctor>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public string Address { get; set; }
        public int? Contact { get; set; }
        public int? Age { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<PatientsDoctor> PatientsDoctors { get; set; }
    }
}
