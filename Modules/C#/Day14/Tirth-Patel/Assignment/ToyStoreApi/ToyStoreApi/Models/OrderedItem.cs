using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class OrderedItem
    {
        public int OrderedItemId { get; set; }
        public int OrderId { get; set; }
        public int ToysId { get; set; }
        public int Quantity { get; set; }
        public int Amount { get; set; }
        public int? OrdersOrderId { get; set; }

        public virtual Order OrdersOrder { get; set; }
        public virtual Toy Toys { get; set; }
    }
}
