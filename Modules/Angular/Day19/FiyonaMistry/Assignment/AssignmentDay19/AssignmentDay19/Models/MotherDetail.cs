using System;
using System.Collections.Generic;

#nullable disable

namespace AssignmentDay19.Models
{
    public partial class MotherDetail
    {
        public int MotherId { get; set; }
        public string MotherFirstName { get; set; }
        public string MotherMiddleName { get; set; }
        public string MotherLastName { get; set; }
        public string MotherEmail { get; set; }
        public string MotherEducationQualification { get; set; }
        public string MotherProfession { get; set; }
        public string MotherDesignation { get; set; }
        public long MotherPhoneNumber { get; set; }
        public int StudentId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual StudentDetail Student { get; set; }
    }
}
