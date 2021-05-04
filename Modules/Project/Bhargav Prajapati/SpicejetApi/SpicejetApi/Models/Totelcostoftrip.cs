using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Totelcostoftrip
    {
        public Totelcostoftrip()
        {
            Flighttrips = new HashSet<Flighttrip>();
            Travelllers = new HashSet<Travelller>();
        }

        public int CostId { get; set; }
        public double Tax { get; set; }
        public double Amount { get; set; }
        public double DiscountOffer { get; set; }
        public string Currency { get; set; }
        public double? FinalAmount { get; set; }

        public virtual ICollection<Flighttrip> Flighttrips { get; set; }
        public virtual ICollection<Travelller> Travelllers { get; set; }
    }
}
