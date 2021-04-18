using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Treatment
    {
        public int PatientId { get; set; }
        public int DoctorIdAssistantId { get; set; }
        public int Drugid { get; set; }
        public string DrugTime { get; set; }

        public virtual Assistant DoctorIdAssistant { get; set; }
        public virtual Doctor DoctorIdAssistant1 { get; set; }
        public virtual Department DoctorIdAssistantNavigation { get; set; }
        public virtual Drug Drug { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
