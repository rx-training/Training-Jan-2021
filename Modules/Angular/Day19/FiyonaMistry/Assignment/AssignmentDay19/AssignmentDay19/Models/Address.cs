using System;
using System.Collections.Generic;

#nullable disable

namespace AssignmentDay19.Models
{
    public partial class Address
    {
        public int AddressId { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public int PinCode { get; set; }
        public int StudentId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual StudentDetail Student { get; set; }
    }
}
