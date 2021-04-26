using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Report
    {
        public int? PatientId { get; set; }
        public int? DoctorId { get; set; }
        public int? PrecscriptionId { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
