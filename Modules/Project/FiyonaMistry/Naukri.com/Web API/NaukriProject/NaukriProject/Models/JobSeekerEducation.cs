using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class JobSeekerEducation
    {
        [Key]
        public int JobSeekerEducationId { get; set; }
        public int? JobSeekerId { get; set; }
        public string JobSeekerField { get; set; }
        public string JobSeekerCollege { get; set; }
        public int JobSeekerYearofCompletion { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual JobSeeker JobSeeker { get; set; }
    }
}
