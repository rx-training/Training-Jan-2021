using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class EventLanguage
    {
        public int EventLanguage1 { get; set; }
        public int? EventId { get; set; }
        public int? LanguageId { get; set; }

        public virtual Event Event { get; set; }
        public virtual Language Language { get; set; }
    }
}
