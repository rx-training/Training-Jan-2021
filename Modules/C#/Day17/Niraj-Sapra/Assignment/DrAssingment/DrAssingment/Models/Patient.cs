using System;
using System.Collections.Generic;

#nullable disable

namespace DrAssingment.Models
{
    public partial class Patient
    {
        public int Patientsid { get; set; }
        public int PatientNo { get; set; }
        public string Patientsname { get; set; }
        public int? Doctorids { get; set; }
        public int? Mediciens { get; set; }
        public int? Helthcares { get; set; }

        public virtual Doctor DoctoridsNavigation { get; set; }
        public virtual HealthcareAss HelthcaresNavigation { get; set; }
        public virtual Medicine MediciensNavigation { get; set; }
    }
}
