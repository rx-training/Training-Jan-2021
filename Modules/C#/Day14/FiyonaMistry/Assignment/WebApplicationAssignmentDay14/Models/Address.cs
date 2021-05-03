using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationAssignmentDay14.Models
{
    public partial class Address
    {
        public Address()
        {
            Orders = new HashSet<Order>();
        }

        public int AdId { get; set; }
        public string Address1 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Pincode { get; set; }
        public int CustId { get; set; }

        public virtual Customer Cust { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
