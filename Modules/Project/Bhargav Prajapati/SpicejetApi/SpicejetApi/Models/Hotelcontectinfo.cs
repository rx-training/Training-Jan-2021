using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Hotelcontectinfo
    {
        public Hotelcontectinfo()
        {
            Hotels = new HashSet<Hotel>();
        }

        public int ContectId { get; set; }
        public string HotelMobileNo { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Hotel> Hotels { get; set; }
    }
}
