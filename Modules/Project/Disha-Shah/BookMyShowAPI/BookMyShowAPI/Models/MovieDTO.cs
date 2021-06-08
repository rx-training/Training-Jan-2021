using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    public class MovieDTO
    {
        public int MovieId { get; set; }
        public string Name { get; set; }
        public string Time { get; set; }
        public string Image { get; set; }
        public DateTime DateOfRelease { get; set; }
        public string About { get; set; }
        public string Certification { get; set; }
        public bool? IsRecommended { get; set; }
        public bool? IsPremiere { get; set; }
        public string BackgroundImage { get; set; }
        public string Cast { get; set; }
        public string CastImages { get; set; }
        public string[] Genres { get; set; }
        public string[] Languages { get; set; }
        public string[] FilmCategories { get; set; }

        /*
         * public int MovieId { get; set; }
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

        public virtual Certification Certification { get; set; }
        public virtual ICollection<MovieFilmCategory> MovieFilmCategories { get; set; }
        public virtual ICollection<MovieGenre> MovieGenres { get; set; }
        public virtual ICollection<MovieLanguage> MovieLanguages { get; set; }
        public virtual ICollection<ScreensMovie> ScreensMovies { get; set; }


         Name = movie.Name,
        About=movie.About,
        Image=movie.Image,
        DateOfRelease=movie.DateOfRelease,
        Time=movie.Time,
        IsRecommended=movie.IsRecommended,
        IsPremiere=movie.IsPremiere,
        CertificationId=certification.CertificationId
         */
    }
}
