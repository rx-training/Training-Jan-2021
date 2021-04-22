using System;
using System.Collections.Generic;
using System.Text;

namespace Day12Assignment.Models
{
    class Order
    {
        public int OrderId { get; set; }
        
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        public string Toys { get; set; }

        //public Toy Toy { get; set; }

        public int Bill { get; set; }

        public string Address { get; set; }

        public int offerValue { get; set; }
        public Offer Offer { get; set; }
    }
}
