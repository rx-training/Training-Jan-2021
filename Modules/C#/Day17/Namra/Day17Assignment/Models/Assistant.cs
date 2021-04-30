using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class Assistant
    {
        public int AssistantId { get; set; }
        public string AssistantName { get; set; }
        public string AssistantContact { get; set; }
        public string AssistantEmail { get; set; }

        public virtual TranscriptAssistant TranscriptAssistant { get; set; }
    }
}
