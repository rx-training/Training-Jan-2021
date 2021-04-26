using System;
using System.Collections.Generic;

#nullable disable

namespace Day10.Models
{
    public partial class Transcript
    {
        public int TranscriptId { get; set; }
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
        public string Drugs { get; set; }
        public int Days { get; set; }
        public int Bill { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
