using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class VSeatCategorySeat
    {
        public int SeatsCategoryId { get; set; }
        public string SeatCategory { get; set; }
        public decimal Price { get; set; }
        public string SeatNo { get; set; }
        public int SeatsId { get; set; }
        public bool? IsBooked { get; set; }
    }
}
