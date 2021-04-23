using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ToyId { get; set; }
        public int Quantity { get; set; }

        public Order Order { get; set; }
        public Toy Toy { get; set; }
    }
}
