using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Drug
    {
        public Drug()
        {
            Prescriptions = new HashSet<Prescription>();
        }

        public int DrugId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Prescription> Prescriptions { get; set; }
    }
}
