using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models
{
    public class AppliedForJob
    {
        public int CompanyId { get; set; }
        public Company Company { get; set; }

        public int JobId { get; set; }
        public Job Job { get; set; }

        public int JobSeekerId { get; set; }
        public JobSeeker JobSeeker { get; set; }
    }
}
