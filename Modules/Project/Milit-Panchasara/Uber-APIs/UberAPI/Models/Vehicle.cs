using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class Vehicle
    {
        public long VehicleId { get; set; }
        public long DriverId { get; set; }
        public long? CurrentRideTypeId { get; set; }
        public string VehicleBrand { get; set; }
        public string VehicleName { get; set; }
        public string RegistrationNo { get; set; }
        public string VehicleDocument { get; set; }
        public string VehicleType { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual RideType CurrentRideType { get; set; }
        public virtual Driver Driver { get; set; }
    }
}
