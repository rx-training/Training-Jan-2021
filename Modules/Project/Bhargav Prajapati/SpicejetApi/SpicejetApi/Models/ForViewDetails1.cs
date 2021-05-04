using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class ForViewDetails1
    {
        public string GustName { get; set; }
        public string EmailId { get; set; }
        public string MobileNo { get; set; }
        public int NumberOfPerson { get; set; }
        public bool? PaymentStatus { get; set; }
        public DateTime? Paymentdate { get; set; }
        public double? TotelAmount { get; set; }
        public string PaymentType { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
