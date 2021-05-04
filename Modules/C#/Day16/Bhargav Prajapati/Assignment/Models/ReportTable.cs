using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class ReportTable
    {
        public int DoctorId { get; set; }
        public int PatientId { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual PatientDetail Patient { get; set; }
    }
}
