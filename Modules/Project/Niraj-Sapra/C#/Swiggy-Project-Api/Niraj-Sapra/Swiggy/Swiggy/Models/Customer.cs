using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Creditmemos = new HashSet<Creditmemo>();
            Invoices = new HashSet<Invoice>();
            Orders = new HashSet<Order>();
            Shipments = new HashSet<Shipment>();
        }

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }

        public virtual ICollection<Creditmemo> Creditmemos { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
