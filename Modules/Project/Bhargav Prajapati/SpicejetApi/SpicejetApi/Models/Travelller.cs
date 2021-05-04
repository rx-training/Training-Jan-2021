using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Travelller
    {
        public int TripId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PassportNo { get; set; }
        public string MoblileNo { get; set; }
        public string Email { get; set; }
        public string Pnrno { get; set; }
        public bool Statusofflight { get; set; }
        public bool PaymentStatus { get; set; }
        public int SeatNo { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime CheckInDatetime { get; set; }
        public string Triptype { get; set; }
        public int AirplaneId { get; set; }
        public string Arrivefrom { get; set; }
        public string DepartFrom { get; set; }
        public int CostId { get; set; }

        public virtual Airplane Airplane { get; set; }
        public virtual Airport ArrivefromNavigation { get; set; }
        public virtual Totelcostoftrip Cost { get; set; }
        public virtual Airport DepartFromNavigation { get; set; }
        public virtual Seat SeatNoNavigation { get; set; }
        public virtual Flighttrip Trip { get; set; }
    }
}
