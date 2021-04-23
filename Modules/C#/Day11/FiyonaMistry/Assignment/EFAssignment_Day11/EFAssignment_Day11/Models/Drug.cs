using System;
using System.Collections.Generic;

#nullable disable

namespace EFAssignment_Day11.Models
{
    public partial class Drug
    {
        public int DrugId { get; set; }
        public string DrugName { get; set; }
        public int MorningDose { get; set; }
        public int AfternoonDose { get; set; }
        public int NightDose { get; set; }
        public int PreId { get; set; }

        public virtual Prescription Pre { get; set; }
    }
}
