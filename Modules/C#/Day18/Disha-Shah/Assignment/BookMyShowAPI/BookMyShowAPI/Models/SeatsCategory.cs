using System;
using System.Collections.Generic;

#nullable disable

namespace BookMyShowAPI.Models
{
    public partial class SeatsCategory
    {
        public SeatsCategory()
        {
            ScreenSeatsCategories = new HashSet<ScreenSeatsCategory>();
            Seats = new HashSet<Seat>();
        }

        public int SeatsCategoryId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }

        public virtual ICollection<ScreenSeatsCategory> ScreenSeatsCategories { get; set; }
        public virtual ICollection<Seat> Seats { get; set; }
    }
}
