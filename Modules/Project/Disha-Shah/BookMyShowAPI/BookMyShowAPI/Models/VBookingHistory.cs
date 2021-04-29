using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    [NotMapped]
    public class VBookingHistory
    {
        public string MovieEvent { get; set; }
        public DateTime DateOfShow { get; set; }
        public TimeSpan ShowTiming { get; set; }
        public string Venue { get; set; }
        public int Screen { get; set; }
        public string SeatNo { get; set; }
        public byte TotalTickets { get; set; }
    }
}
