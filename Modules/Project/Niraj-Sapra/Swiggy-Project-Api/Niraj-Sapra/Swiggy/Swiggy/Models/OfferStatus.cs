using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class OfferStatus
    {
        public OfferStatus()
        {
            Offers = new HashSet<Offer>();
        }

        public int OfferStatusId { get; set; }
        public string OfferStatus1 { get; set; }

        public virtual ICollection<Offer> Offers { get; set; }
    }
}
