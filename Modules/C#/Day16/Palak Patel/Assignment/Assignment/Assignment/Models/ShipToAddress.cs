using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class ShipToAddress
    {
        [Key]
        public int AddressId { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string HouseNo { get; set; }

        public Customer Customer { get; set; }
    }
}
