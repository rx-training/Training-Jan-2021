using System;
using System.Collections.Generic;

#nullable disable

namespace AssignmentDay19.Models
{
    public partial class ReferenceDetail
    {
        public int ReferenceId { get; set; }
        public string ReferenceThrough { get; set; }
        public string ReferenceAddress { get; set; }
        public long ReferencePhoneNumber { get; set; }
        public int StudentId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual StudentDetail Student { get; set; }
    }
}
