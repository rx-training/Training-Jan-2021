using System;
using System.Collections.Generic;

#nullable disable

namespace Repository.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Borrows = new HashSet<Borrow>();
            Deposits = new HashSet<Deposit>();
        }

        public string Cname { get; set; }
        public string City { get; set; }

        public virtual ICollection<Borrow> Borrows { get; set; }
        public virtual ICollection<Deposit> Deposits { get; set; }
    }
}
