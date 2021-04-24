using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class OrderDetail
    {
        public int OrderId { get; set; }
        public int ToyId { get; set; }
        public int ShipToId { get; set; }
        public int Qty { get; set; }
        public decimal Total { get; set; }
        public decimal ToBePaid { get; set; }

        public virtual Order Order { get; set; }
        public virtual ShipTo ShipTo { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
