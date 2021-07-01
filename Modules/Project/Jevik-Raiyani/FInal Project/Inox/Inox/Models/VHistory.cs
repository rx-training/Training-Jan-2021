using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class VHistory
    {
        public int TicketId { get; set; }
        public DateTime ShowDate { get; set; }
        public TimeSpan StartTime { get; set; }
        public string CinemaName { get; set; }
        public string CinemaCity { get; set; }
        public string MovieName { get; set; }
        public string Language { get; set; }
        public int Duration { get; set; }
        public int RowNo { get; set; }
        public int SeatNo { get; set; }
        public double Price { get; set; }
        public string Name { get; set; }
        public DateTime? BookingDate { get; set; }
        public string UserGmail { get; set; }
    }
}
