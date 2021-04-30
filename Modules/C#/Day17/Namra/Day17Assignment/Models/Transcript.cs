using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class Transcript
    {
        public int TranscriptId { get; set; }
        public int PatientId { get; set; }
        public string Doctors { get; set; }
        public string Assistants { get; set; }
        public string Drugs { get; set; }
        public int Bill { get; set; }
        public DateTime? TranscriptDate { get; set; }

        public virtual Patient Patient { get; set; }
        public virtual Doctor Doctor { get; set; }
        public ICollection<Patient> patients { get; set; }
    }
}
