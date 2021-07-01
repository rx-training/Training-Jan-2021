using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAdmissionFormAPI.Models
{
    public partial class ReferenceDetail
    {
        public int ReferenceId { get; set; }
        public int? StudentId { get; set; }
        public string ReferenceThrough { get; set; }
        public string Address { get; set; }
        public long Contact { get; set; }

        public virtual Student Student { get; set; }
    }
}
