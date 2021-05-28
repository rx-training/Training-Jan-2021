using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Offer
    {
        public Offer()
        {
            Orders = new HashSet<Order>();
        }

        public int OfferId { get; set; }
        public decimal? OfferDiscountPrice { get; set; }
        public int? OfferStatusId { get; set; }

        public virtual OfferStatus OfferStatus { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
