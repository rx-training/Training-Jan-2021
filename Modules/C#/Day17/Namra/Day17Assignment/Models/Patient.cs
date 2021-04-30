using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class Patient
    {
        public Patient()
        {
            Transcripts = new HashSet<Transcript>();
        }

        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public string PatientAddress { get; set; }
        public string PatientContact { get; set; }
        public string PatientEmail { get; set; }
        public DateTime PatientCreateDate { get; set; }

        public virtual ICollection<Transcript> Transcripts { get; set; }
    }
}
