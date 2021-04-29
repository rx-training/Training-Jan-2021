using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class MovieLanguage
    {
        public int MovieLanguage1 { get; set; }
        public int MovieId { get; set; }
        public int LanguageId { get; set; }

        public virtual Language Language { get; set; }
        public virtual Movie Movie { get; set; }
    }
}
