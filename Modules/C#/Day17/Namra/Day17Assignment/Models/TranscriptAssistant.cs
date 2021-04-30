using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class TranscriptAssistant
    {
        public int AssistantId { get; set; }

        public virtual Assistant Assistant { get; set; }
    }
}
