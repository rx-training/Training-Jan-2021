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
            MovieBookings = new HashSet<MovieBooking>();
        }

        public int FilmCategoryId { get; set; }
        public string FilmCategory1 { get; set; }

        public virtual ICollection<MovieFilmCategory> MovieFilmCategories { get; set; }
        public virtual ICollection<MovieBooking> MovieBookings { get; set; }
    }
}
