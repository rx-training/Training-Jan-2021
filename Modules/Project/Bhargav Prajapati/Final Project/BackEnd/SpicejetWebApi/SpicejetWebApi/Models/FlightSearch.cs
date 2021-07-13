﻿using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class FlightSearch
    {
        public string AirPlaneName { get; set; }
        public int SeatingCapacity { get; set; }
        public string Model { get; set; }
        public DateTime Make { get; set; }
        public int Amout { get; set; }
        public double Tex { get; set; }
        public double TotelAmount { get; set; }
        public int TravelId { get; set; }
        public string DepatureCity { get; set; }
        public string DepatureAirPortName { get; set; }
        public string ArrivedCity { get; set; }
        public string ArriveAirPortName { get; set; }
        public DateTime DepartDate { get; set; }
        public DateTime ArriveDate { get; set; }
        public string DepartTime { get; set; }
        public string ArriveTime { get; set; }
        public int AirPlaneId { get; set; }
        public int CostId { get; set; }
    }
}