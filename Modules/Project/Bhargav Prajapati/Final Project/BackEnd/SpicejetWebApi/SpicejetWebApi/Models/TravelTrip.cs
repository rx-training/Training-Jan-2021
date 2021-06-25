using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class TravelTrip
    {
        public TravelTrip()
        {
            BookingFlights = new HashSet<BookingFlight>();
        }

        public int TravelId { get; set; }
        public string DepatureCity { get; set; }
        public string DepatureAirPortName { get; set; }
        public string ArrivedCity { get; set; }
        public string ArriveAirPortName { get; set; }
        public DateTime DepartDate { get; set; }
        public DateTime ArriveDate { get; set; }
        public string DepartTime { get; set; }
        public string ArriveTime { get; set; }
        public int AirPlaneId { get; set; }
        public int CostId { get; set; }

        public virtual AirplaneDetail AirPlane { get; set; }
        public virtual CostDetail Cost { get; set; }
        public virtual ICollection<BookingFlight> BookingFlights { get; set; }
    }
}
