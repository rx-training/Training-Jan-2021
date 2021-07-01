using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAdmissionFormAPI.Models
{
    public partial class EmergencyContact
    {
        public int EmergencyId { get; set; }
        public int? StudentId { get; set; }
        public string Relation { get; set; }
        public long Contact { get; set; }

        public virtual Student Student { get; set; }
    }
}
