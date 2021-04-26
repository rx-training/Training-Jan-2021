using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderedItems = new HashSet<OrderedItem>();
        }

        public int OrderId { get; set; }
        public int Cid { get; set; }
        public int? CustomersCid { get; set; }

        public virtual Customer CustomersC { get; set; }
        public virtual ICollection<OrderedItem> OrderedItems { get; set; }
    }
}
