using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Genre
    {
        public Genre()
        {
            MovieGenres = new HashSet<MovieGenre>();
        }

        public int GenreId { get; set; }
        public string Genre1 { get; set; }

        public virtual ICollection<MovieGenre> MovieGenres { get; set; }
    }
}
