using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment1.Models
{
    public partial class DoctorPatientView
    {
        public int DoctorId { get; set; }
        public string DoctorFirstName { get; set; }
        public string DoctorLastName { get; set; }
        public int? DepartmentId { get; set; }
        public int PatientId { get; set; }
        public string PatientFirstName { get; set; }
        public string PatientLastName { get; set; }
    }
}
