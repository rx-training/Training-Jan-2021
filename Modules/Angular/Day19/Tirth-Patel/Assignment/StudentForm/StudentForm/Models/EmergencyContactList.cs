using System;
using System.Collections.Generic;

#nullable disable

namespace StudentForm.Models
{
    public partial class EmergencyContactList
    {
        public int SrNo { get; set; }
        public int StudentId { get; set; }
        public string ERelation { get; set; }
        public string ENumber { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Student Student { get; set; }
    }
}
