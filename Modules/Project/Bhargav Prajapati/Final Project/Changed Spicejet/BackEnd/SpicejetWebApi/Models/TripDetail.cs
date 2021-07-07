using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class TripDetail
    {
        public TripDetail()
        {
            RouteDetails = new HashSet<RouteDetail>();
            UserFlightBookingDetails = new HashSet<UserFlightBookingDetail>();
        }

        public int TripId { get; set; }
        public string DepartureAirportName { get; set; }
        public string ArrivedAirportName { get; set; }
        public string DepatureCity { get; set; }
        public string ArrivedCity { get; set; }
        public DateTime DepartDateTime { get; set; }
        public DateTime ArrivedDateTime { get; set; }

        public virtual ICollection<RouteDetail> RouteDetails { get; set; }
        public virtual ICollection<UserFlightBookingDetail> UserFlightBookingDetails { get; set; }
    }
}
