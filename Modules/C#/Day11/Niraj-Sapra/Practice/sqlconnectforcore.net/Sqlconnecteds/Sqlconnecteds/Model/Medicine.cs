using System;
using System.Collections.Generic;

#nullable disable

namespace Sqlconnecteds.Model
{
    public partial class Medicine
    {
        public Medicine()
        {
            Patients = new HashSet<Patient>();
        }

        public int Medicineid { get; set; }
        public string Medicinename { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
    }
}
