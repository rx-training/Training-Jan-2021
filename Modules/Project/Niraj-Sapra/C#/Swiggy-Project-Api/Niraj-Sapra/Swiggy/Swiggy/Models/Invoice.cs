using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Invoice
    {
        public int InvoiceId { get; set; }
        public int? OrderId { get; set; }
        public decimal? TotalPrice { get; set; }
        public int? CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Order Order { get; set; }
    }
}
