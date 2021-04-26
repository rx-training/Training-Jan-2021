using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class VOrder
    {
        public decimal? Revenue { get; set; }
        public DateTime OrderDate { get; set; }
        public int ProductId { get; set; }
        public long? Count { get; set; }
    }
}
