using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Airport
    {
        public Airport()
        {
            FlighttripArriveAirportNameNavigations = new HashSet<Flighttrip>();
            FlighttripDepartAirportNameNavigations = new HashSet<Flighttrip>();
            TravelllerArrivefromNavigations = new HashSet<Travelller>();
            TravelllerDepartFromNavigations = new HashSet<Travelller>();
        }

        public int AirPortCode { get; set; }
        public string AirportName { get; set; }
        public int AirPlaneId { get; set; }
        public int AddressId { get; set; }

        public virtual Addressofairport Address { get; set; }
        public virtual Airplane AirPlane { get; set; }
        public virtual ICollection<Flighttrip> FlighttripArriveAirportNameNavigations { get; set; }
        public virtual ICollection<Flighttrip> FlighttripDepartAirportNameNavigations { get; set; }
        public virtual ICollection<Travelller> TravelllerArrivefromNavigations { get; set; }
        public virtual ICollection<Travelller> TravelllerDepartFromNavigations { get; set; }
    }
}
