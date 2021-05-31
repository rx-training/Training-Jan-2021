using System;
using System.Collections.Generic;

#nullable disable

namespace assignmentAPIs.Models
{
    public partial class Parent
    {
        public long Id { get; set; }
        public long StudentId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Education { get; set; }
        public string Profession { get; set; }
        public string Designation { get; set; }
        public string ContactNumber { get; set; }
        public string Relation { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Student Student { get; set; }
    }
}
