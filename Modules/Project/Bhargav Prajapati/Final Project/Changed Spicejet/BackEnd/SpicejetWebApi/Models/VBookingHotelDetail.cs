using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class VBookingHotelDetail
    {
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelAmount { get; set; }
        public string HotelName { get; set; }
        public string HotelCity { get; set; }
        public string HotelState { get; set; }
        public string HotelAddress { get; set; }
        public string PinNumber { get; set; }
        public string Rating { get; set; }
        public int NumberOfRoomAvailable { get; set; }
        public string HotelContectNumber { get; set; }
        public string HotelEmailAddress { get; set; }
        public string ImgPath1 { get; set; }
        public string ImgPath2 { get; set; }
        public string ImgPath3 { get; set; }
        public string ImgPath4 { get; set; }
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
    }
}
