using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Seat
    {
        public Seat()
        {
            Travelllers = new HashSet<Travelller>();
        }

        public int SeatNo { get; set; }
        public bool StatusOfSit { get; set; }
        public string Location { get; set; }
        public string Class { get; set; }

        public virtual ICollection<Travelller> Travelllers { get; set; }
    }
}
