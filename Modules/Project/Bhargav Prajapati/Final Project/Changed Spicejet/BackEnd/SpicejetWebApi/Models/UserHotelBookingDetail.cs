using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class UserHotelBookingDetail
    {
        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserConformationNumber { get; set; }
        public string UserContactNumber { get; set; }
        public string UserEmailAddress { get; set; }
        public int NumberOfGuest { get; set; }
        public DateTime BookingDateTime { get; set; }
        public int CostId { get; set; }
        public int HotelId { get; set; }

        public virtual HotelCostDetail Cost { get; set; }
        public virtual HotelDetail Hotel { get; set; }
    }
}
