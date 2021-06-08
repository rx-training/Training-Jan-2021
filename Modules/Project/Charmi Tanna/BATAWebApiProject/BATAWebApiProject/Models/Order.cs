using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class Order
    {
        public Order()
        {
            Sales = new HashSet<Sale>();
        }

        public int OrderId { get; set; }
        public string ProductCode { get; set; }
        public decimal? ProductPrice { get; set; }
        public int? Quantity { get; set; }
        public decimal? Amount { get; set; }
        public string ProductDescription { get; set; }
        public DateTime? DateOfOrder { get; set; }
        public int? VoucherCode { get; set; }
        public string PaymentMode { get; set; }

        public virtual Product ProductCodeNavigation { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
