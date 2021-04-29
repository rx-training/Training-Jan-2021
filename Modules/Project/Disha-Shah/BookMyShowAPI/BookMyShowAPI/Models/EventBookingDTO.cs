using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    public class EventBookingDTO
    {
        public string TicketCount { get; set; }
        public string Event { get; set; }
        public string UserContact { get; set; }
        public string EventVenue { get; set; }
        public string ShowTiming { get; set; }
        public string EventType { get; set; }
        public DateTime DateOfEvent { get; set; }
    }
}
