using NaukriProject.Authentication;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace NaukriProject.Models
{
    public partial class JobSeeker
    {
        public JobSeeker()
        {
            JobSeekerEducations = new HashSet<JobSeekerEducation>();
            JobSeekerJobHistories = new HashSet<JobSeekerJobHistory>();
        }

        [Key]
        public int JobSeekerId { get; set; }
        public string JobSeekerFirstName { get; set; }
        public string JobSeekerMiddleName { get; set; }
        public string JobSeekerLastName { get; set; }
        public long JobSeekerPhoneNumber { get; set; }
        public string JobSeekerType { get; set; }
        public string JobSeekerEmail { get; set; }
        public string JobSeekerResume { get; set; }
        public string JobSeekerSkills { get; set; }
        public string JobSeekerProjects { get; set; }
        public DateTime? JobSeekerDob { get; set; }
        public string JobSeekerGender { get; set; }
        public string JobSeekerAddress { get; set; }
        public int? JobSeekerAreaPinCode { get; set; }
        public string JobSeekerPassword { get; set; }

        public string Id { get; set; }
        public ApplicationUser UserId { get; set; }

        //[System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<JobSeekerEducation> JobSeekerEducations { get; set; }

        //[System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<JobSeekerJobHistory> JobSeekerJobHistories { get; set; }
    }
}
