using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class FilmCategory
    {
        public FilmCategory()
        {
            MovieFilmCategories = new HashSet<MovieFilmCategory>();
        }

        public int FilmCategoryId { get; set; }
        public string FilmCategory1 { get; set; }

        public virtual ICollection<MovieFilmCategory> MovieFilmCategories { get; set; }
    }
}
