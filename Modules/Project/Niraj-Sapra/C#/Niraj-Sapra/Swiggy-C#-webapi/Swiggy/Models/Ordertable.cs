using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Ordertable
    {
        public Ordertable()
        {
            Paymenttables = new HashSet<Paymenttable>();
        }

        public int Orderid { get; set; }
        public DateTime Dates { get; set; }
        public string CustomerName { get; set; }
        public int CustomerId { get; set; }
        public int Orderstats { get; set; }
        public int Paymentid { get; set; }

        public virtual UserSignup Customer { get; set; }
        public virtual OrderStatus OrderstatsNavigation { get; set; }
        public virtual Payment Payment { get; set; }
        public virtual ICollection<Paymenttable> Paymenttables { get; set; }
    }
}
