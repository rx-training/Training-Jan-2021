using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class TranscriptDoctor
    {
        public int DoctorId { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
