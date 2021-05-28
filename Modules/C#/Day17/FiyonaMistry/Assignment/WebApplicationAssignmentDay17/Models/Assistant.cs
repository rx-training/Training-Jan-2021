using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationAssignmentDay17.Models
{
    public partial class Assistant
    {
        public Assistant()
        {
            Patients = new HashSet<Patient>();
        }

        public int AssisId { get; set; }
        public string AssisFname { get; set; }
        public string AssisLname { get; set; }
        public int AssisPhoneNumber { get; set; }
        public string AssisQualification { get; set; }
        public string AssisAddress { get; set; }
        public int DocId { get; set; }

        public virtual Doctor Doc { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
