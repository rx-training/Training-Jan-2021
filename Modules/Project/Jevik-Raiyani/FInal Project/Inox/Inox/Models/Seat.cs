using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class Seat
    {
        public Seat()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int SeatId { get; set; }
        public int RowId { get; set; }
        public int SeatNo { get; set; }
        public int SeatTypeId { get; set; }

        public virtual Row Row { get; set; }
        public virtual SeatType SeatType { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
