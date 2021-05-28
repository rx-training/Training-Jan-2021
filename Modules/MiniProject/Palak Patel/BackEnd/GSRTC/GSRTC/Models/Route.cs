using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class Route
    {
        [Key]
        public string RouteID { get; set; }
        public Bus bus { get; set; }
        public string Destination { get; set; }
        public string Source { get; set; }
        public string RouteName {
            get
            {
                return RouteName;
            }

            set
            {
                RouteName = $"{bus.Origin}To{this.Destination}";
            }
        }
        public int Price { get; set; }
        public TimeSpan ArrivalTime { get; set; }
        public TimeSpan DepartureTime { get; set; }
        public string BusfkID { get; set; }
        [ForeignKey("TRoutefkID")]
        public ICollection<TicketBooking> tickets { get; set; }
    }
}
