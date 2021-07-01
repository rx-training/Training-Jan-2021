using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class AirplaneDetail
    {
        public AirplaneDetail()
        {
            BookingFlights = new HashSet<BookingFlight>();
            TravelTrips = new HashSet<TravelTrip>();
        }

        public int AirPlaneId { get; set; }
        public string AirPlaneName { get; set; }
        public int SeatingCapacity { get; set; }
        public string Model { get; set; }
        public DateTime Make { get; set; }

        public virtual ICollection<BookingFlight> BookingFlights { get; set; }
        public virtual ICollection<TravelTrip> TravelTrips { get; set; }
    }
}
