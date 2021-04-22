using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class Orders
    {
        public int OrderId { get; set; }
        public CustomerWithAddress CustomerWithAddress { get; set; }
        public Toys Toys { get; set; }
        public int Quantaty { get; set; }

    }
}
