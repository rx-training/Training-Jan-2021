using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class CostDetail
    {
        public CostDetail()
        {
            BookingFlights = new HashSet<BookingFlight>();
            HotelUserDetails = new HashSet<HotelUserDetail>();
            TravelTrips = new HashSet<TravelTrip>();
        }

        public int CostId { get; set; }
        public int Amout { get; set; }
        public double Tex { get; set; }
        public double TotelAmount { get; set; }

        public virtual ICollection<BookingFlight> BookingFlights { get; set; }
        public virtual ICollection<HotelUserDetail> HotelUserDetails { get; set; }
        public virtual ICollection<TravelTrip> TravelTrips { get; set; }
    }
}
