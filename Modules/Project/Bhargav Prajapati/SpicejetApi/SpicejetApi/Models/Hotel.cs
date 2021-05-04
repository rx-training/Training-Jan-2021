using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Hotel
    {
        public Hotel()
        {
            Payments = new HashSet<Payment>();
        }

        public int HotelId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int HotelRating { get; set; }
        public int NumberOfRoom { get; set; }
        public int ContectId { get; set; }

        public virtual Hotelcontectinfo Contect { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
