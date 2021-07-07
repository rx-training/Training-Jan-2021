using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class UserFlightBookingDetail
    {
        public int UserId { get; set; }
        public string PnrNumber { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserContactNumber { get; set; }
        public string UserEmail { get; set; }
        public DateTime BookingDateTime { get; set; }
        public int AirplaneId { get; set; }
        public int CostId { get; set; }
        public int TripId { get; set; }

        public virtual AirplaneDetail Airplane { get; set; }
        public virtual CostDetail Cost { get; set; }
        public virtual TripDetail Trip { get; set; }
    }
}
