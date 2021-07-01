using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class JobSeekerJobHistory
    {
        [Key]
        public int JobSeekerJobHistoryId { get; set; }
        public int? JobSeekerId { get; set; }
        public string JobSeekerDesignation { get; set; }
        public string JobSeekerCompany { get; set; }
        public double JobSeekerAnnualSalary { get; set; }
        public DateTime JobSeekerWorkingFrom { get; set; }
        public DateTime JobSeekerWorkingTo { get; set; }
        public string JobSeekerCurrentCity { get; set; }
        public short? IsCurrent { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual JobSeeker JobSeeker { get; set; }
    }
}
