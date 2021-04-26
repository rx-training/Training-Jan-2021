using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class Order
    {
        public int OrderId { get; set; }
        public int? CustomerWithAddressCaid { get; set; }
        public int? ToysToyId { get; set; }
        public int Quantaty { get; set; }

        public virtual CustomerWithAddress CustomerWithAddressCa { get; set; }
        public virtual Toy ToysToy { get; set; }
    }
}
