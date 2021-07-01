using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class TheatresMovie
    {
        public int TheatreId { get; set; }
        public string Theatre { get; set; }
        public string Address { get; set; }
        public int CityId { get; set; }
        public string City { get; set; }
        public int ShowTimingId { get; set; }
        public TimeSpan ShowTime { get; set; }
        public int ScreenId { get; set; }
        public int ScreenSeatsCategoryId { get; set; }
        public int SeatsCategoryId { get; set; }
        public string SeatCategory { get; set; }
        public string SeatNo { get; set; }
        public decimal Price { get; set; }
        public int SeatsId { get; set; }
        public bool? IsBooked { get; set; }
        public string Movie { get; set; }
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
        public DateTime EndDate { get; set; }
    }
}
