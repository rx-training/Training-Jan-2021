using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class Toy
    {
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }

        public Plant Plant { get; set; }
    }
}
