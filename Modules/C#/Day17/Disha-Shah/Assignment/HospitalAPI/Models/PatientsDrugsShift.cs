using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAPI.Models
{
    public partial class PatientsDrugsShift
    {
        public int Id { get; set; }
        public int? PatientId { get; set; }
        public int? DrugsId { get; set; }
        public int? ShiftId { get; set; }

        public virtual Drug Drugs { get; set; }
        public virtual Patient Patient { get; set; }
        public virtual Shift Shift { get; set; }
    }
}
