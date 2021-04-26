using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAPI.Models
{
    public partial class Patient
    {
        public Patient()
        {
            PatientsDoctors = new HashSet<PatientsDoctor>();
            PatientsDrugsShifts = new HashSet<PatientsDrugsShift>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Contact { get; set; }
        public string Address { get; set; }
        public int? Age { get; set; }
        public string ProblemDesc { get; set; }
        public int? DepartmentId { get; set; }
        public int? HealthCareId { get; set; }

        public virtual Department Department { get; set; }
        public virtual HealthCare HealthCare { get; set; }
        public virtual ICollection<PatientsDoctor> PatientsDoctors { get; set; }
        public virtual ICollection<PatientsDrugsShift> PatientsDrugsShifts { get; set; }
    }
}
