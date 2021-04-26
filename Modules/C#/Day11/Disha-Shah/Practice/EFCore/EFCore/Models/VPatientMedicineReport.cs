using System;
using System.Collections.Generic;

#nullable disable

namespace EFCore.Models
{
    public partial class VPatientMedicineReport
    {
        public string Patient { get; set; }
        public int? Contact { get; set; }
        public int? Age { get; set; }
        public string ProblemDesc { get; set; }
        public string Department { get; set; }
        public string Drugs { get; set; }
        public string Description { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public int? Price { get; set; }
        public string MedicineTime { get; set; }
    }
}
