using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace AssignmentDay19.Models
{
    public partial class FatherDetail
    {
        public int FatherId { get; set; }
        public string FatherFirstName { get; set; }
        public string FatherMiddleName { get; set; }
        public string FatherLastName { get; set; }
        public string FatherEmail { get; set; }
        public string FatherEducationQualification { get; set; }
        public string FatherProfession { get; set; }
        public string FatherDesignation { get; set; }
        public long FatherPhoneNumber { get; set; }
        public int StudentId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual StudentDetail Student { get; set; }
    }
}
