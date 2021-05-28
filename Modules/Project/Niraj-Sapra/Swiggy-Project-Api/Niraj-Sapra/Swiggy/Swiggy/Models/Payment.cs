using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Payment
    {
        public int PaymentId { get; set; }
        public int? CustomerId { get; set; }
        public int? OrderId { get; set; }
        public DateTime? CurrentTimes { get; set; }
        public int? Paymenttype { get; set; }
        public decimal? PayTotlePrice { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Order Order { get; set; }
        public virtual PaymentType PaymenttypeNavigation { get; set; }
    }
}
