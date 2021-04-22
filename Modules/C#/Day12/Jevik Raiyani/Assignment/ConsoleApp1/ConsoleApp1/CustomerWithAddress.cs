using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class CustomerWithAddress
    {
        public CustomerWithAddress()
        {
            Orders = new HashSet<Order>();
        }

        public int Caid { get; set; }
        public int? CustomersCustomerId { get; set; }
        public int? AddressesAddressId { get; set; }

        public virtual Address AddressesAddress { get; set; }
        public virtual Customer CustomersCustomer { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
