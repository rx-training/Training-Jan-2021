using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class Offer
    {
        public long OfferId { get; set; }
        public string OfferCode { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
