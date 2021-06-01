using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class VTransactionHistory
    {
        public int TicketId { get; set; }
        public int ShowTimeId { get; set; }
        public int SeatId { get; set; }
        public double Price { get; set; }
        public string UserGmail { get; set; }
        public string PaymentMethod { get; set; }
        public string PaymentDetail { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan StartTime { get; set; }
        public DateTime? PaymentDate { get; set; }
    }
}
