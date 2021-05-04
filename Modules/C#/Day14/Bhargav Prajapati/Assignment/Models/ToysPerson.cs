using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class ToysPerson
    {
        public int ToyId { get; set; }
        public int CustomerId { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
