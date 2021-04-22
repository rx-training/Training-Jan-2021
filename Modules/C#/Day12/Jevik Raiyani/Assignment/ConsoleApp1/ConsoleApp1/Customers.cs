using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class Customers
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

        public ICollection<CustomerWithAddress> CustomerWithAddresses { get; set; }

    }
}
