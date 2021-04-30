using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class Drug
    {
        public int DrugId { get; set; }
        public string DrugName { get; set; }
        public string DrugContent { get; set; }
        public int Price { get; set; }
        public int Expiry { get; set; }

        public virtual TranscriptDrug TranscriptDrug { get; set; }
    }
}
