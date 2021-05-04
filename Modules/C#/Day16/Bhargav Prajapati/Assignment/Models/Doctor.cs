using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            PatientDetails = new HashSet<PatientDetail>();
        }

        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public int Salary { get; set; }
        public int Experience { get; set; }
        public int DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<PatientDetail> PatientDetails { get; set; }
    }
}
