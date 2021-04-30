using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day17Assignment.Models
{
    public class PatientTranscripts
    {
        public int TranscriptId { get; set; }
        public int PatientId { get; set; }
        public string Doctors{ get; set; }
        public string MyProperty { get; set; }
    }
}
