using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationAssignmentDay14.Models
{
    public partial class OrderToy
    {
        public int ToyId { get; set; }
        public int OrderId { get; set; }
        public int? ToysToyId { get; set; }
        public int? OrdersOrderId { get; set; }

        public virtual Order OrdersOrder { get; set; }
        public virtual Toy ToysToy { get; set; }
    }
}
