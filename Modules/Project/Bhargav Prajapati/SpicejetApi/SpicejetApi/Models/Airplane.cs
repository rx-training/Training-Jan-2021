using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Airplane
    {
        public Airplane()
        {
            Airports = new HashSet<Airport>();
            Flighttrips = new HashSet<Flighttrip>();
            Travelllers = new HashSet<Travelller>();
        }

        public int AirplaneId { get; set; }
        public string AirplaneName { get; set; }
        public int SittingCapacity { get; set; }
        public DateTime LastMentananceDate { get; set; }
        public string Modal { get; set; }
        public DateTime Make { get; set; }

        public virtual ICollection<Airport> Airports { get; set; }
        public virtual ICollection<Flighttrip> Flighttrips { get; set; }
        public virtual ICollection<Travelller> Travelllers { get; set; }
    }
}
