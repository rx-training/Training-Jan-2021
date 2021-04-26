using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Assignment.Models
{
    class ShipToAddress
    {
        [Key]
        public int AddressId { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string HouseNo { get; set; }

        public Customer Customer { get; set; }
    }
}
