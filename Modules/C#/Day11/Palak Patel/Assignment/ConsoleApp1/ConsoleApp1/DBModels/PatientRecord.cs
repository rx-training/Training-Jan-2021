using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1.DBModels
{
    public partial class PatientRecord
    {
        public int? PatientId { get; set; }
        public int? DoctorId { get; set; }
        public int? Haid { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual HealthcareAssistant Ha { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
