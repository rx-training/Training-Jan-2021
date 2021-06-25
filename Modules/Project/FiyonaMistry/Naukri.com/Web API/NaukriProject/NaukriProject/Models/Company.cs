using NaukriProject.Authentication;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class Company
    {
        public Company()
        {
            CompanyBranches = new HashSet<CompanyBranch>();
            Jobs = new HashSet<Job>();
        }

        [Key]
        public int CompanyId { get; set; }
        public string CompanyName { get; set; }
        public string CompanySector { get; set; }
        public string CompanySize { get; set; }
        public double CompanyReview { get; set; }
        public byte[] CompanyImages { get; set; }
        public string CompanyAbout { get; set; }
        public string CompanyWebsite { get; set; }
        public string CompanyPassword { get; set; }
        public int? SubSectorId { get; set; }

        public string Id { get; set; }
        public ApplicationUser UserId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual SubSector SubSector { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<CompanyBranch> CompanyBranches { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Job> Jobs { get; set; }
    }
}
