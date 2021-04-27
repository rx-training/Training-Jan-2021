using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VTheatresScreensSeat
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
    }
}
