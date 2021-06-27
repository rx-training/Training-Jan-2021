using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class EventBooking
    {
        public int EventBookingId { get; set; }
        public DateTime BookingDate { get; set; }
        public byte TicketCount { get; set; }
        public int EventId { get; set; }
        //public string Event { get; set; }
        public int UserId { get; set; }
        //public string UserContact { get; set; }
        public int EventVenueId { get; set; }
        //public string EventVenue { get; set; }
        public int ShowTimingId { get; set; }
        //public TimeSpan ShowTiming { get; set; }
        public decimal? TotalAmount { get; set; }
        public int EventTypeId { get; set; }
        //public string EventType { get; set; }
        //public DateTime DateOfEvent { get; set; }

        public virtual Event Event { get; set; }
        public virtual User User { get; set; }
        public virtual EventVenue EventVenue { get; set; }
        public virtual ShowTiming ShowTiming { get; set; }
        public virtual EventType EventType { get; set; }
    }
}
