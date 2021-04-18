using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Vtreatment
    {
        public int PatientId { get; set; }
        public int DoctorIdAssistantId { get; set; }
        public int Drugid { get; set; }
        public string DrugTime { get; set; }
    }
}
