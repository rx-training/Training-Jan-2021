using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class BookingDetail
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MoblileNo { get; set; }
        public string PassportNo { get; set; }
        public bool Statusofflight { get; set; }
        public int SeatNo { get; set; }
        public DateTime BookingDate { get; set; }
        public string Pnrno { get; set; }
        public string Triptype { get; set; }
        public string Arrivefrom { get; set; }
        public string DepartFrom { get; set; }
        public double? FinalAmount { get; set; }
    }
}
