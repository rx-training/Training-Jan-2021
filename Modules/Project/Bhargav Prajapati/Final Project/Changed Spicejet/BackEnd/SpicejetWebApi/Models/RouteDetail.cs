using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class RouteDetail
    {
        public int RouteId { get; set; }
        public int TripId { get; set; }
        public int CostId { get; set; }
        public int AirplaneId { get; set; }

        public virtual AirplaneDetail Airplane { get; set; }
        public virtual CostDetail Cost { get; set; }
        public virtual TripDetail Trip { get; set; }
    }
}
