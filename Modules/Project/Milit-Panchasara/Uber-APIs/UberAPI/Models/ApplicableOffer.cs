using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class ApplicableOffer
    {
        public long RiderId { get; set; }
        public long OfferId { get; set; }
        public bool IsDisabled { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Offer Offer { get; set; }
        public virtual Rider Rider { get; set; }
    }
}
