using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class SavedPaymentMode
    {
        public long? RiderId { get; set; }
        public string PaymentMode { get; set; }
        public decimal CardNumber { get; set; }
        public DateTime CardDate { get; set; }
        public string CardName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Rider Rider { get; set; }
    }
}
