using System;
using System.Collections.Generic;

#nullable disable

namespace EFCore.Models
{
    public partial class Shift
    {
        public Shift()
        {
            PatientsDrugsShifts = new HashSet<PatientsDrugsShift>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<PatientsDrugsShift> PatientsDrugsShifts { get; set; }
    }
}
