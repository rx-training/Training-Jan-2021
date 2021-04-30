using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class TranscriptDrug
    {
        public int DrugId { get; set; }
        public int? Quantity { get; set; }

        public virtual Drug Drug { get; set; }
    }
}
