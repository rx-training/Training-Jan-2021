using System;
using System.Collections.Generic;

#nullable disable

namespace assignmentAPIs.Models
{
    public partial class EmergencyDetail
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public string Relation { get; set; }
        public string ContactNumber { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Student Student { get; set; }
    }
}
