using System;
using System.Collections.Generic;

#nullable disable

namespace Day14.Models
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public string Toys { get; set; }
        public int Bill { get; set; }
        public string Address { get; set; }
        public int OfferValue { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Offer OfferValueNavigation { get; set; }
    }
}
