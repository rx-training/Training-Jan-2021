using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Prescription
    {
        public int PatientId { get; set; }
        public int DrugId { get; set; }
        public int? HealthcareWorkerId { get; set; }
        public string Shift { get; set; }

        public virtual Drug Drug { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
