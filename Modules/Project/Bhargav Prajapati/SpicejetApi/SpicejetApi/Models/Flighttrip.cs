using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Flighttrip
    {
        public Flighttrip()
        {
            Travelllers = new HashSet<Travelller>();
        }

        public int TripId { get; set; }
        public int UserId { get; set; }
        public int Airplaneno { get; set; }
        public int Passenger { get; set; }
        public DateTime Departdate { get; set; }
        public DateTime ArriveDate { get; set; }
        public string DepartAirportName { get; set; }
        public string ArriveAirportName { get; set; }
        public int CostId { get; set; }

        public virtual Airplane AirplanenoNavigation { get; set; }
        public virtual Airport ArriveAirportNameNavigation { get; set; }
        public virtual Totelcostoftrip Cost { get; set; }
        public virtual Airport DepartAirportNameNavigation { get; set; }
        public virtual Userforbooking User { get; set; }
        public virtual ICollection<Travelller> Travelllers { get; set; }
    }
}
