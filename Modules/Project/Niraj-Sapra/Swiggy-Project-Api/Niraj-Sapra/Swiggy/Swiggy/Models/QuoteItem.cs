using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class QuoteItem
    {
        public int QuoteItemId { get; set; }
        public int? QuoteItemProduct { get; set; }

        public virtual Product QuoteItemProductNavigation { get; set; }
    }
}
