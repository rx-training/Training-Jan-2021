using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Theatre
    {
        public Theatre()
        {
            Screens = new HashSet<Screen>();
            TheatreShowTimings = new HashSet<TheatreShowTiming>();
            MovieBookings = new HashSet<MovieBooking>();
        }

        public int TheatreId { get; set; }
        public string Name { get; set; }
        public int CityId { get; set; }
        public string Address { get; set; }

        public virtual City City { get; set; }
        public virtual ICollection<Screen> Screens { get; set; }
        public virtual ICollection<TheatreShowTiming> TheatreShowTimings { get; set; }
        public virtual ICollection<MovieBooking> MovieBookings { get; set; }
    }
}
