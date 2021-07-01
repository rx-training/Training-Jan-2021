using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class MovieBooking
    {
        public int MovieBookingId { get; set; }
        public DateTime BookingDate { get; set; }
        public int MovieId { get; set; }
        //public string Movie { get; set; }
        public int UserId { get; set; }
        //public string UserContact { get; set; }
        public string SeatNo { get; set; }
        public int TheatreId { get; set; }
        //public string Theatre { get; set; }
        public int ShowTimingId { get; set; }
        //public TimeSpan ShowTiming { get; set; }
        public decimal? TotalAmount { get; set; }
        public int ScreenId { get; set; }
        //public int? Screen { get; set; }
        public int CityId { get; set; }
        //public string City { get; set; }
        public int LanguageId { get; set; }
        //public string Language { get; set; }
        public int FilmCategoryId { get; set; }
        //public string FilmCategory { get; set; }
        public DateTime DateToWatch { get; set; }
        public byte TotalTickets { get; set; }

        public virtual Movie Movie { get; set; }
        public virtual User User { get; set; }
        public virtual Theatre Theatre { get; set; }
        public virtual ShowTiming ShowTiming { get; set; }
        public virtual Screen Screen { get; set; }
        public virtual City City { get; set; }
        public virtual Language Language { get; set; }
        public virtual FilmCategory FilmCategory { get; set; }
    }
}
