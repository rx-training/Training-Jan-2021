using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationAssignmentDay17.Models
{
    public partial class Patient
    {
        public Patient()
        {
            Prescriptions = new HashSet<Prescription>();
        }

        public int PatId { get; set; }
        public string PatFname { get; set; }
        public string PatLname { get; set; }
        public int PatPhoneNumber { get; set; }
        public DateTime PatDob { get; set; }
        public string PatAddress { get; set; }
        public int DocId { get; set; }
        public int AssisId { get; set; }

        public virtual Assistant Assis { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Doctor Doc { get; set; }
        public virtual ICollection<Prescription> Prescriptions { get; set; }
    }
}
