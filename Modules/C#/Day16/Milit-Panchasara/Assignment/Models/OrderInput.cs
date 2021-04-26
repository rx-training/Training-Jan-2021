using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    [NotMapped]
    public class OrderInput
    {
        public int ToyId { get; set; }
        public int Quantity { get; set; }
    }
}
