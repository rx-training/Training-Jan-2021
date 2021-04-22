using System;
using System.Collections.Generic;

#nullable disable

namespace Day10.Models
{
    public partial class Assistant
    {
        public int AssistantId { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public int DoctorId { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
