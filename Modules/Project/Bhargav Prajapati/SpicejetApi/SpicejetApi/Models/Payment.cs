using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public string PaymentType { get; set; }
        public DateTime Paymentdate { get; set; }
        public bool PaymentStatus { get; set; }
        public double TotelAmount { get; set; }
        public double Gst { get; set; }
        public double Amount { get; set; }
        public int HotelId { get; set; }
        public int GustId { get; set; }

        public virtual Guste Gust { get; set; }
        public virtual Hotel Hotel { get; set; }
    }
}
