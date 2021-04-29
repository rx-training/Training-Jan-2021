using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Language
    {
        public Language()
        {
            EventLanguages = new HashSet<EventLanguage>();
            MovieLanguages = new HashSet<MovieLanguage>();
        }

        public int LanguageId { get; set; }
        public string Language1 { get; set; }

        public virtual ICollection<EventLanguage> EventLanguages { get; set; }
        public virtual ICollection<MovieLanguage> MovieLanguages { get; set; }
    }
}
