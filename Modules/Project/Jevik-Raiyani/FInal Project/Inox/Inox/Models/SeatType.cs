using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class SeatType
    {
        public SeatType()
        {
            Seats = new HashSet<Seat>();
        }

        public int SeatTypeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Seat> Seats { get; set; }
    }
}
