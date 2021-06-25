using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class HotelCostInfo
    {
        public HotelCostInfo()
        {
            HotelInfos = new HashSet<HotelInfo>();
        }

        public int CostId { get; set; }
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelPrice { get; set; }

        public virtual ICollection<HotelInfo> HotelInfos { get; set; }
    }
}
