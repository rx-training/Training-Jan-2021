using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class VBookingFlightDetail
    {
        public int UserId { get; set; }
        public string PnrNumber { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserContactNumber { get; set; }
        public string UserEmail { get; set; }
        public DateTime BookingDateTime { get; set; }
        public int AirplaneId { get; set; }
        public int CostId { get; set; }
        public int TripId { get; set; }
        public string AirplaneName { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string AirplaneModel { get; set; }
        public string ManufactureCompony { get; set; }
        public int SeatingCapacity { get; set; }
        public int Amount { get; set; }
        public double Tax { get; set; }
        public double TotelCost { get; set; }
        public string DepartureAirportName { get; set; }
        public string ArrivedAirportName { get; set; }
        public string DepatureCity { get; set; }
        public string ArrivedCity { get; set; }
        public DateTime DepartDateTime { get; set; }
        public DateTime ArrivedDateTime { get; set; }
    }
}
