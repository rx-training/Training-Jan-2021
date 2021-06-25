using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace NaukriProject.Models
{
    public partial class CompanyBranch
    {
        [Key]
        public int CompanyBranchId { get; set; }
        public int? CompanyId { get; set; }
        public string CompanyLocation { get; set; }
        public string CompanyAddress { get; set; }
        public int? CompanyPinCode { get; set; }

        public virtual Company Company { get; set; }
    }
}
