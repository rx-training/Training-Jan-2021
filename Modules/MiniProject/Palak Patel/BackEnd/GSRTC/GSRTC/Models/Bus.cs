using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GSRTC.Models
{
    public class Bus
    {
        [Key]
        public string BusID { get; set; }
        public string BusName { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public string RoutType { get; set; }
        public string BusType { get; set; }
        public int Price { get; set; }
        [ForeignKey("BusfkID")]
        public ICollection<Route> Routes { get; set; }
        [ForeignKey("TBusfkID")]
        public ICollection<TicketBooking> tickets { get; set; }
    }
}
