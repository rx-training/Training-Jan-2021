using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class VBookingHotel
    {
        public double HotelMobileNumber { get; set; }
        public string HotelEmail { get; set; }
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelPrice { get; set; }
        public string HotelName { get; set; }
        public string HotelCity { get; set; }
        public string HotelState { get; set; }
        public string HotelAddress { get; set; }
        public double PinNumber { get; set; }
        public string Rating { get; set; }
        public string StartingTime { get; set; }
        public string ClosingTime { get; set; }
        public int NoOfRoomAvailable { get; set; }
        public string ImgPath1 { get; set; }
        public string ImgPath2 { get; set; }
        public string ImgPath3 { get; set; }
        public string ImgPath4 { get; set; }
        public int UserId { get; set; }
        public string UserReferenceNumumbar { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }
        public double UserContectNumber { get; set; }
        public int NumberOfGuest { get; set; }
        public int CostId { get; set; }
        public int HotelId { get; set; }
        public int ContectId { get; set; }
    }
}
