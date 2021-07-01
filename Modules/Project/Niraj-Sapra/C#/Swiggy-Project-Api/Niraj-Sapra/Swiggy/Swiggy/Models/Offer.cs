using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Offer
    {
        public int OfferId { get; set; }
        public string OfferName { get; set; }
        public decimal OfferDiscountPrice { get; set; }
    }
}
