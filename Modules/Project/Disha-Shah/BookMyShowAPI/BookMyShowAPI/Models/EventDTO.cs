using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    public class EventDTO
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public decimal TicketPrice { get; set; }
        public string Image { get; set; }
        public string Time { get; set; }
        public DateTime DateOfEvent { get; set; }
        public string EventVenue { get; set; }
        public string ShowTime { get; set; }
        public string EventType { get; set; }
        public int MinAge { get; set; }
        public string BackgroundImage { get; set; }
        public string About { get; set; }
        public string Note { get; set; }
        public string ArtistName { get; set; }
        public string ArtistImage { get; set; }
        public string Disclaimer { get; set; }
        public string FAQs { get; set; }
        public string TermsAndConditions { get; set; }
        public string[] Languages { get; set; }
    }
}
