﻿using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class ShowTiming
    {
        public ShowTiming()
        {
            EventVenueShowTimings = new HashSet<EventVenueShowTiming>();
            ScreenShowTimings = new HashSet<ScreenShowTiming>();
            TheatreShowTimings = new HashSet<TheatreShowTiming>();
            MovieBookings = new HashSet<MovieBooking>();
            EventBookings = new HashSet<EventBooking>();
        }

        public int ShowTimingId { get; set; }
        public TimeSpan ShowTime { get; set; }

        public virtual ICollection<EventVenueShowTiming> EventVenueShowTimings { get; set; }
        public virtual ICollection<ScreenShowTiming> ScreenShowTimings { get; set; }
        public virtual ICollection<TheatreShowTiming> TheatreShowTimings { get; set; }
        public virtual ICollection<MovieBooking> MovieBookings { get; set; }
        public virtual ICollection<EventBooking> EventBookings { get; set; }
    }
}
