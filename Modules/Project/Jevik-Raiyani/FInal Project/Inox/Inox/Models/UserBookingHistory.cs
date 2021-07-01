using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class UserBookingHistory
    {
        public string Email { get; set; }
        public int TicketId { get; set; }
        public int ShowTimeId { get; set; }
        public int SeatId { get; set; }
        public double Price { get; set; }
        public string UserGmail { get; set; }
        public int PaymentId { get; set; }
        public string PaymentDetail { get; set; }
        public DateTime? Date { get; set; }
    }
}
