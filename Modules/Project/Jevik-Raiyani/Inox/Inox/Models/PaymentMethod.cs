using System;
using System.Collections.Generic;

#nullable disable

namespace Inox.Models
{
    public partial class PaymentMethod
    {
        public PaymentMethod()
        {
            Tickets = new HashSet<Ticket>();
        }

        public int PaymentId { get; set; }
        public string PaymentMethod1 { get; set; }

        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}
