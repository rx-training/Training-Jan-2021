using System;
using System.Collections.Generic;

#nullable disable

namespace AssignmentDay19.Models
{
    public partial class EmergencyContact
    {
        public int EmergencyContactId { get; set; }
        public string Relation { get; set; }
        public long PhoneNumber { get; set; }
        public int StudentId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual StudentDetail Student { get; set; }
    }
}
