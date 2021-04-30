using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class ScreenSeatsCategory
    {
        public int ScreenSeatsCategoryId { get; set; }
        public int ScreenId { get; set; }
        public int SeatsCategoryId { get; set; }

        public virtual Screen Screen { get; set; }
        public virtual SeatsCategory SeatsCategory { get; set; }
    }
}
