using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ToyId { get; set; }
        public int Quantity { get; set; }

        public virtual Order Order { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
