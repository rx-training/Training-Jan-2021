using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class CustomerAddress
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int CustomerId { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Customer Customer { get; set; }
    }
}
