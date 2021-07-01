using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class Sale
    {
        public int SaleId { get; set; }
        public int? CustomerId { get; set; }
        public int? OrderId { get; set; }
        public string ProductCode { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Order Order { get; set; }
        public virtual Product ProductCodeNavigation { get; set; }
    }
}
