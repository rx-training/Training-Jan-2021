using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalAssignment.Models
{
    public class VPatientsMedicine
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public int MedicineId { get; set; }
        public string MedicineName { get; set; }
        public bool Morning { get; set; }
        public bool Afternoon { get; set; }
        public bool Night { get; set; }
        public bool AfterMeal { get; set; }
    }
}
