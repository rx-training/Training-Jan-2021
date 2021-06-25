using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class Job
    {
        [Key]
        public int JobId { get; set; }
        public string JobName { get; set; }
        public string JobExperienceNeeded { get; set; }
        public string JobKeySkills { get; set; }
        public string JobSalary { get; set; }
        public string JobLocation { get; set; }
        public string JobDescription { get; set; }
        public string JobRole { get; set; }
        public string JobEmploymentType { get; set; }
        public short? IsOpen { get; set; }
        public int? CompanyId { get; set; }

        //[System.Text.Json.Serialization.JsonIgnore]
        public virtual Company Company { get; set; }
    }
}
