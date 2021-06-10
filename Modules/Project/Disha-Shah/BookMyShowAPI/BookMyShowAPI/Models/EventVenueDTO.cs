using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    public class EventVenueDTO
    {
        public int EventVenueId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int TotalTickets { get; set; }
        public string City { get; set; }
        public string ShowTime { get; set; }
    }
}
