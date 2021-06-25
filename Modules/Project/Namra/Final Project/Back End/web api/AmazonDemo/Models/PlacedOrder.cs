using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class PlacedOrder
    {
        public long PlacedOrderId { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public string PlacedStatus { get; set; }
        public DateTime? PlacedDate { get; set; }
        public int Bill { get; set; }
        public int AddressId { get; set; }
        public int SalerId { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
