using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class ShipAddress
    {
        public int ShipId { get; set; }
        public int CustomerId { get; set; }
        public string Address { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
