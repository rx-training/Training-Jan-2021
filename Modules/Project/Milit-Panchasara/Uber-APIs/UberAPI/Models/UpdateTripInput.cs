using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UberAPI.Models
{
    public class UpdateTripInput
    {
        public long RiderId { get; set; }
        public long TripId { get; set; }
        public string Action { get; set; }
        public string PaymentMethod { get; set; }
        public string CancelledBy { get; set; }
    }
}
