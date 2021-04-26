using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class Toy
    {
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }

        public Plant Plant { get; set; }
    }
}
