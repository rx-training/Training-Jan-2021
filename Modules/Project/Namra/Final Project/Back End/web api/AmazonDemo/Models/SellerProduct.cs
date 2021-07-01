using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class SellerProduct
    {
        public long SellerProductId { get; set; }
        public int SellerId { get; set; }
        public int ProductId { get; set; }
        public DateTime? SellerProductDate { get; set; }

        public virtual Product Product { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
