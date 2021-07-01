using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class Ticket
    {
        public int TicketId { get; set; }
        public int ShowTimeId { get; set; }
        public int SeatId { get; set; }
        public double Price { get; set; }
        public string UserGmail { get; set; }
        public int PaymentId { get; set; }
        public string PaymentDetail { get; set; }
        public DateTime? Date { get; set; }

        public virtual PaymentMethod Payment { get; set; }
        public virtual Seat Seat { get; set; }
        public virtual ShowTime ShowTime { get; set; }
    }
}
