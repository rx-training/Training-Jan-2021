using System;
using System.Collections.Generic;
using System.Text;

namespace Assignmwnt10.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public int OrderQuantity { get; set; }
        public int Amount { get; set; }
        public int OfferDiscount { get; set; }
        public int NetAmount { get; set; }
        public int ToyId { get; set; }
        public Toy toy { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

    }
}
