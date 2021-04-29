using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Sport
    {
        public int EventId { get; set; }
        public string Event { get; set; }
        public string Image { get; set; }
        public decimal TicketPrice { get; set; }
        public string Time { get; set; }
        public DateTime DateOfEvent { get; set; }
        public int EventTypeId { get; set; }
        public string EventType { get; set; }
        public int EventVenueShowTimingId { get; set; }
        public int EventVenueId { get; set; }
        public string EventVenue { get; set; }
        public string Address { get; set; }
        public int TotalTickets { get; set; }
        public int CityId { get; set; }
        public string City { get; set; }
        public TimeSpan ShowTime { get; set; }
        public int ShowTimingId { get; set; }
        public int LanguageId { get; set; }
        public string Language { get; set; }
    }
}
