using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class PatientDrugTable
    {
        public int PatientId { get; set; }
        public int DrugId { get; set; }

        public virtual DrugTable Drug { get; set; }
        public virtual PatientDetail Patient { get; set; }
    }
}
