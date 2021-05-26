using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class Seller
    {
        public Seller()
        {
            SellerAddresses = new HashSet<SellerAddress>();
            SellerDeliverables = new HashSet<SellerDeliverable>();
            SellerProducts = new HashSet<SellerProduct>();
        }

        public int SellerId { get; set; }
        public string SellerName { get; set; }
        public string SellerContactNo { get; set; }
        public string SellerEmail { get; set; }
        public string SellerCompanyName { get; set; }
        public DateTime? SellerDate { get; set; }

        public virtual ICollection<SellerAddress> SellerAddresses { get; set; }
        public virtual ICollection<SellerDeliverable> SellerDeliverables { get; set; }
        public virtual ICollection<SellerProduct> SellerProducts { get; set; }
    }
}
