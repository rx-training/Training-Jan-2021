using System;
using System.Collections.Generic;

#nullable disable

namespace Assingmet1.Models
{
    public partial class PatientDetail
    {
        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public string Patentcondition { get; set; }
        public string DiseaseName { get; set; }
        public int DoctorId { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
