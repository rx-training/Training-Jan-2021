using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UberAPI.Models
{
    public class VTripsData
    {
        public long TripId { get; set; }
        public long RiderId { get; set; }
        public long DriverId { get; set; }
        public string RiderName { get; set; }
        public string DriverName { get; set; }
        public string SourceLocation { get; set; }
        public string DestinationLocation { get; set; }
        public string RideName { get; set; }
        public string VehicleBrand { get; set; }
        public string VehicleName { get; set; }
        public string RegistrationNo { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string Status { get; set; }
        public double? EstimatedFairAmount { get; set; }
        public double? ActualFairAmount { get; set; }
        public string CancelledBy { get; set; }
    }
}
