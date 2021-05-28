using Swiggy.Models.Repository;
using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Product
    {
        public Product()
        {
            QuoteItems = new HashSet<QuoteItem>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal? ProductPrice { get; set; }
        public string ProductImage { get; set; }
        public int? RestorentId { get; set; }

        public virtual Restorent Restorent { get; set; }
        public virtual ICollection<QuoteItem> QuoteItems { get; set; }
    }
}
