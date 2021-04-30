using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Models
{
    public class MovieBookingDTO
    {
        public string Movie { get; set; }
        public string UserContact { get; set; }
        public string[] SeatNo { get; set; }
        public string Theatre { get; set; }
        public string ShowTiming { get; set; }
        public string City { get; set; }
        public string Language { get; set; }
        public string FilmCategory { get; set; }
        public DateTime DateToWatch { get; set; }
    }
}
