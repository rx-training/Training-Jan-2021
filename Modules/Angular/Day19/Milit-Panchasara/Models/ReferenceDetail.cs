using System;
using System.Collections.Generic;

#nullable disable

namespace assignmentAPIs.Models
{
    public partial class ReferenceDetail
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public string ReferenceThrough { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Pin { get; set; }
        public string ContactNumber { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Student IdNavigation { get; set; }
    }
}
