using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class City
    {
        public City()
        {
            EventVenues = new HashSet<EventVenue>();
            Theatres = new HashSet<Theatre>();
            MovieBookings = new HashSet<MovieBooking>();
        }

        public int CityId { get; set; }
        public int? RegionId { get; set; }
        public string Name { get; set; }

        public virtual Region Region { get; set; }
        public virtual ICollection<EventVenue> EventVenues { get; set; }
        public virtual ICollection<Theatre> Theatres { get; set; }
        public virtual ICollection<MovieBooking> MovieBookings { get; set; }
    }
}
