using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class BookingFlight
    {
        public int BookingId { get; set; }
        public string Pnrnumber { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }
        public double UserPhoneNumber { get; set; }
        public int AirPlaneId { get; set; }
        public int CostId { get; set; }
        public int TravelId { get; set; }

        public virtual AirplaneDetail AirPlane { get; set; }
        public virtual CostDetail Cost { get; set; }
        public virtual TravelTrip Travel { get; set; }
    }
}
