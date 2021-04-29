using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VMovie
    {
        public int MovieId { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string About { get; set; }
        public DateTime DateOfRelease { get; set; }
        public string Time { get; set; }
        public bool? IsRecommended { get; set; }
        public bool? IsPremiere { get; set; }
        public int CertificationId { get; set; }
        public string Certification { get; set; }
        public int LanguageId { get; set; }
        public string Language { get; set; }
        public int GenreId { get; set; }
        public string Genre { get; set; }
        public int FilmCategoryId { get; set; }
        public string FilmCategory { get; set; }
    }
}
