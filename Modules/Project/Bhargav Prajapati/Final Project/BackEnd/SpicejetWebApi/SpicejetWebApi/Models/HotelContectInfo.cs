using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class HotelContectInfo
    {
        public HotelContectInfo()
        {
            HotelInfos = new HashSet<HotelInfo>();
            HotelUserDetails = new HashSet<HotelUserDetail>();
        }

        public int HotelContectId { get; set; }
        public double HotelMobileNumber { get; set; }
        public string HotelEmail { get; set; }

        public virtual ICollection<HotelInfo> HotelInfos { get; set; }
        public virtual ICollection<HotelUserDetail> HotelUserDetails { get; set; }
    }
}
