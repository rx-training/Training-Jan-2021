using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Addresses = new HashSet<Address>();
            ToysPeople = new HashSet<ToysPerson>();
        }

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public double ContectNumber { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<ToysPerson> ToysPeople { get; set; }
    }
}
