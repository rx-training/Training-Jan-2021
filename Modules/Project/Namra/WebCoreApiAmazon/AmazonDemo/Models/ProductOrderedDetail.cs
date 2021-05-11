using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class ProductOrderedDetail
    {
        public int UserId { get; set; }
        public string ProductName { get; set; }
        public int SellerId { get; set; }
        public long OrderId { get; set; }
        public int Quantity { get; set; }
        public DateTime? OrderedDate { get; set; }
    }
}
