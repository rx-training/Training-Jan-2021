using System;
using System.Collections.Generic;

#nullable disable

namespace HosptialWebApi.Model
{
    public partial class Patient
    {
        public Patient()
        {
            Prescriptions = new HashSet<Prescription>();
        }

        public string PatientName { get; set; }
        public int PatientId { get; set; }
        public int? Prescription { get; set; }

        public virtual ICollection<Prescription> Prescriptions { get; set; }
    }
}
