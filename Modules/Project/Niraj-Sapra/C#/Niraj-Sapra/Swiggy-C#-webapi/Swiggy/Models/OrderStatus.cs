using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class OrderStatus
    {
        public OrderStatus()
        {
            Ordertables = new HashSet<Ordertable>();
        }

        public int Orderstatusid { get; set; }
        public string Orderstauts { get; set; }

        public virtual ICollection<Ordertable> Ordertables { get; set; }
    }
}
