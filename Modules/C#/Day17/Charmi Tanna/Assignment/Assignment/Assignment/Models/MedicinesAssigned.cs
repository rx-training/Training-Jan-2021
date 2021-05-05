using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class MedicinesAssigned
    {
        public int Id { get; set; }
        public int? PatientId { get; set; }
        public int? MorningMedicineId { get; set; }
        public string MorningMedicineName { get; set; }
        public int? AfternoonMedicineId { get; set; }
        public string AfternoonMedicineName { get; set; }
        public int? NightMedicineId { get; set; }
        public string NightMedicineName { get; set; }

        public virtual Patient Patient { get; set; }
    }
}
