using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_13Assignment.Models
{
    public partial class OrderDetail
    {
        public int Qty { get; set; }

        public decimal Total { get; set; }

        public decimal ToBePaid { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }

        public int ToyId { get; set; }
        public Toy Toy { get; set; }

        public int ShipToId { get; set; }
        public ShipTo ShipTo { get; set; }
    }
}
