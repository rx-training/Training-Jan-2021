using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAssignment.Models
{
    public partial class Dosage
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int MedicineId { get; set; }
        public bool Morning { get; set; }
        public bool Afternoon { get; set; }
        public bool Night { get; set; }
        public bool AfterMeal { get; set; }

        public virtual Medicine Medicine { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
