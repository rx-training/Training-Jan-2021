using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class PlacedProductDetail
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public byte Offer { get; set; }
        public DateTime? OrderedDate { get; set; }
        public DateTime? PlacedDate { get; set; }
        public int Quantity { get; set; }
        public string SellerCompanyName { get; set; }
        public string SellerContactNo { get; set; }
        public string SellerEmail { get; set; }
    }
}
