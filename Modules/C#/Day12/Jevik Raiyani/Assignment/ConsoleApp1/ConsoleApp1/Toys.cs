using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class Toys
    {
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public TypeOfToy TypeOfToy { get; set; }
        public int ToyPrice { get; set; }
        public ICollection<Orders> Orders { get; set; }
    }
}
