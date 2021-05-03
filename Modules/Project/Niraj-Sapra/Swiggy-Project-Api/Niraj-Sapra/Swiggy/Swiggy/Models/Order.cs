using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Order
    {
        public Order()
        {
            Creditmemos = new HashSet<Creditmemo>();
            Invoices = new HashSet<Invoice>();
            Payments = new HashSet<Payment>();
            Shipments = new HashSet<Shipment>();
        }

        public int OrderId { get; set; }
        public int? CustomerId { get; set; }
        public int? OfferId { get; set; }
        public DateTime? CurrentTimes { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Offer Offer { get; set; }
        public virtual ICollection<Creditmemo> Creditmemos { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Shipment> Shipments { get; set; }
    }
}
