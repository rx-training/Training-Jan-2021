using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class Order
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime OrderDate { get; set; }
        public int OrderAmount { get; set; }
        public int OfferAmount { get; set; }

        public Customer Customer { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
