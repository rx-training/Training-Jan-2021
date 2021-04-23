using System;
using System.Collections.Generic;

#nullable disable

namespace EFAssignment_Day11.Models
{
    public partial class Prescription
    {
        public Prescription()
        {
            Drugs = new HashSet<Drug>();
        }

        public int PreId { get; set; }
        public DateTime PreDate { get; set; }
        public int PatId { get; set; }
        public int DocId { get; set; }

        public virtual Doctor Doc { get; set; }
        public virtual Patient Pat { get; set; }
        public virtual ICollection<Drug> Drugs { get; set; }
    }
}
