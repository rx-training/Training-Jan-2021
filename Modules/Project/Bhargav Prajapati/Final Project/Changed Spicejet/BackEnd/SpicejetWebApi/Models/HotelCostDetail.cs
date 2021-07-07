using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class HotelCostDetail
    {
        public HotelCostDetail()
        {
            ListofHotelDetails = new HashSet<ListofHotelDetail>();
            UserHotelBookingDetails = new HashSet<UserHotelBookingDetail>();
        }

        public int CostId { get; set; }
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelAmount { get; set; }

        public virtual ICollection<ListofHotelDetail> ListofHotelDetails { get; set; }
        public virtual ICollection<UserHotelBookingDetail> UserHotelBookingDetails { get; set; }
    }
}
