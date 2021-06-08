using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class Cart
    {
        public int CartId { get; set; }
        public int? CustomerId { get; set; }
        public string ProductCode { get; set; }
        public int? Quantity { get; set; }
        public int? Size { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
