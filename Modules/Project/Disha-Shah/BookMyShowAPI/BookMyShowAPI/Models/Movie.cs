﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Movie
    {
        public Movie()
        {
            MovieFilmCategories = new HashSet<MovieFilmCategory>();
            MovieGenres = new HashSet<MovieGenre>();
            MovieLanguages = new HashSet<MovieLanguage>();
            ScreensMovies = new HashSet<ScreensMovie>();
            MovieBookings = new HashSet<MovieBooking>();
        }

        public int MovieId { get; set; }
        public string Name { get; set; }
        public string Time { get; set; }
        public string Image { get; set; }
        public DateTime DateOfRelease { get; set; }
        public string About { get; set; }
        public int CertificationId { get; set; }
        public bool? IsRecommended { get; set; }
        public bool? IsPremiere { get; set; }
        public string BackgroundImage { get; set; }
        public string Cast { get; set; }
        public string CastImages { get; set; }
        public bool IsActive { get; set; }

        public virtual Certification Certification { get; set; }
        public virtual ICollection<MovieFilmCategory> MovieFilmCategories { get; set; }
        public virtual ICollection<MovieGenre> MovieGenres { get; set; }
        public virtual ICollection<MovieLanguage> MovieLanguages { get; set; }
        public virtual ICollection<ScreensMovie> ScreensMovies { get; set; }
        public virtual ICollection<MovieBooking> MovieBookings { get; set; }
    }
}
