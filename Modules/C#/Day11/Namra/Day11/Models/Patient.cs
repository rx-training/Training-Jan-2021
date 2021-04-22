using System;
using System.Collections.Generic;

#nullable disable

namespace Day10.Models
{
    public partial class Patient
    {
        public Patient()
        {
            Transcripts = new HashSet<Transcript>();
        }

        public int PatientId { get; set; }
        public string PatientName { get; set; }
        public string ContactNumber { get; set; }
        public string PatientAddress { get; set; }

        public virtual ICollection<Transcript> Transcripts { get; set; }
    }
}
