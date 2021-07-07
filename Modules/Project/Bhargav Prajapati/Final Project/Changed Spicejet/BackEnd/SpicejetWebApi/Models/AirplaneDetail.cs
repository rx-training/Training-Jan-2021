using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class AirplaneDetail
    {
        public AirplaneDetail()
        {
            RouteDetails = new HashSet<RouteDetail>();
            UserFlightBookingDetails = new HashSet<UserFlightBookingDetail>();
        }

        public int AirplaneId { get; set; }
        public string AirplaneName { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string AirplaneModel { get; set; }
        public string ManufactureCompony { get; set; }
        public int SeatingCapacity { get; set; }

        public virtual ICollection<RouteDetail> RouteDetails { get; set; }
        public virtual ICollection<UserFlightBookingDetail> UserFlightBookingDetails { get; set; }
    }
}
