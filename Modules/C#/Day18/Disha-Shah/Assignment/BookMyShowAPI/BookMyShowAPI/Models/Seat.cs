using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class Seat
    {
        public int SeatsId { get; set; }
        public string RowNo { get; set; }
        public int SeatNo { get; set; }
        public int? SeatsCategoryId { get; set; }
        public bool? IsBooked { get; set; }

        public virtual SeatsCategory SeatsCategory { get; set; }
    }
}
