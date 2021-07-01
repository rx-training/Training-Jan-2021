using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class HotelInfo
    {
        public HotelInfo()
        {
            HotelUserDetails = new HashSet<HotelUserDetail>();
        }

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

        public virtual HotelContectInfo Contect { get; set; }
        public virtual HotelCostInfo Cost { get; set; }
        public virtual ICollection<HotelUserDetail> HotelUserDetails { get; set; }
    }
}
