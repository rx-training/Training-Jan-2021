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
        public string Event { get; set; }
        public string UserContact { get; set; }
        public string EventVenue { get; set; }
        public TimeSpan ShowTiming { get; set; }
        public decimal? TotalAmount { get; set; }
        public string EventType { get; set; }
        public DateTime DateOfEvent { get; set; }
    }
}
