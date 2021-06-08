using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class Offer
    {
        public int VoucherCode { get; set; }
        public double? Discount { get; set; }
    }
}
