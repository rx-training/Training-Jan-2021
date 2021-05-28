using System;
using System.Collections.Generic;

#nullable disable

namespace Sqlconnecteds.Model
{
    public partial class HealthcareAss
    {
        public HealthcareAss()
        {
            Patients = new HashSet<Patient>();
        }

        public int HealthcareAssid { get; set; }
        public string HealthcareAssname { get; set; }

        public virtual ICollection<Patient> Patients { get; set; }
    }
}
