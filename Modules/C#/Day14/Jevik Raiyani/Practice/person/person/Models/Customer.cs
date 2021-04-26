﻿using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sale>();
        }

        public int Customerid { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public virtual ICollection<Sale> Sales { get; set; }
    }
}
