using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class SellerDeliverable
    {
        public long SellerDeliverableId { get; set; }
        public int SellerId { get; set; }
        public int CityId { get; set; }
        public DateTime? DeliverableDate { get; set; }

        public virtual City City { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
