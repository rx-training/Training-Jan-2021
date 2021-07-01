using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class Movie
    {
        public Movie()
        {
            MovieDirectorCasts = new HashSet<MovieDirectorCast>();
            ShowTimes = new HashSet<ShowTime>();
        }

        public int MovieId { get; set; }
        public string MovieName { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Language { get; set; }
        public double Rationg { get; set; }
        public string Descripton { get; set; }
        public int Duration { get; set; }

        public virtual ICollection<MovieDirectorCast> MovieDirectorCasts { get; set; }
        public virtual ICollection<ShowTime> ShowTimes { get; set; }
    }
}
