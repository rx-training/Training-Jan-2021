using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class MovieBooking
    {
        public int MovieBookingId { get; set; }
        public DateTime BookingDate { get; set; }
        public string Movie { get; set; }
        public string UserContact { get; set; }
        public string SeatNo { get; set; }
        public string Theatre { get; set; }
        public TimeSpan ShowTiming { get; set; }
        public decimal? TotalAmount { get; set; }
        public int? Screen { get; set; }
        public string City { get; set; }
        public string Language { get; set; }
        public string FilmCategory { get; set; }
        public DateTime DateToWatch { get; set; }
        public byte TotalTickets { get; set; }
    }
}
