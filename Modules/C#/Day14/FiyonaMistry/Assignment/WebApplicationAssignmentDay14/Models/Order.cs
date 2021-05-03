using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationAssignmentDay14.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderToys = new HashSet<OrderToy>();
        }

        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public int Items { get; set; }
        public double Price { get; set; }
        public int CustId { get; set; }
        public int? CustomersCustId { get; set; }
        public int AdId { get; set; }
        public int? AddressesAdId { get; set; }

        public virtual Address AddressesAd { get; set; }
        public virtual Customer CustomersCust { get; set; }
        public virtual ICollection<OrderToy> OrderToys { get; set; }
    }
}
