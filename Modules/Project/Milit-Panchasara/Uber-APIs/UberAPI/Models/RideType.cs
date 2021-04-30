using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class RideType
    {
        public RideType()
        {
            Trips = new HashSet<Trip>();
            Vehicles = new HashSet<Vehicle>();
        }

        public long RideTypeId { get; set; }
        public string RideName { get; set; }
        public double PricePerKm { get; set; }
        public int SeatingCapacity { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual ICollection<Trip> Trips { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
