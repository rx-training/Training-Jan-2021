using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class CostDetail
    {
        public CostDetail()
        {
            RouteDetails = new HashSet<RouteDetail>();
            UserFlightBookingDetails = new HashSet<UserFlightBookingDetail>();
        }

        public int CostId { get; set; }
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelCost { get; set; }

        public virtual ICollection<RouteDetail> RouteDetails { get; set; }
        public virtual ICollection<UserFlightBookingDetail> UserFlightBookingDetails { get; set; }
    }
}
