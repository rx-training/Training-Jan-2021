using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class CustomerAddress
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
