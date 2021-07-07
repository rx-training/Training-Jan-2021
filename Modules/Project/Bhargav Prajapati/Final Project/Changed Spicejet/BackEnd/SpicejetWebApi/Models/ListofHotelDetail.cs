using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class ListofHotelDetail
    {
        public int ListId { get; set; }
        public int CostId { get; set; }
        public int HotelId { get; set; }

        public virtual HotelCostDetail Cost { get; set; }
        public virtual HotelDetail Hotel { get; set; }
    }
}
