using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class Customer
    {
        public Customer()
        {
            CustomerWithAddresses = new HashSet<CustomerWithAddress>();
        }

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }

        public virtual ICollection<CustomerWithAddress> CustomerWithAddresses { get; set; }
    }
}
