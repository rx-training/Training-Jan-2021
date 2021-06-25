using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class VHotelDatum
    {
        public int HotelId { get; set; }
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
        public int ContectId { get; set; }
        public int CostId { get; set; }
        public double HotelMobileNumber { get; set; }
        public string HotelEmail { get; set; }
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelPrice { get; set; }
    }
}
