using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class SellerAddress
    {
        public int SellerAddressId { get; set; }
        public int SellerId { get; set; }
        public string SellerAddress1 { get; set; }
        public int SellerCityId { get; set; }

        public virtual Seller Seller { get; set; }
        public virtual City SellerCity { get; set; }
    }
}
