using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAPI.Models
{
    public partial class Drug
    {
        public Drug()
        {
            PatientsDrugsShifts = new HashSet<PatientsDrugsShift>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? Price { get; set; }
        public DateTime? MfgDate { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public string Description { get; set; }

        public virtual ICollection<PatientsDrugsShift> PatientsDrugsShifts { get; set; }
    }
}
