using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class MovieFilmCategory
    {
        public int MovieFilmcategory1 { get; set; }
        public int MovieId { get; set; }
        public int FilmCategoryId { get; set; }

        public virtual FilmCategory FilmCategory { get; set; }
        public virtual Movie Movie { get; set; }
    }
}
