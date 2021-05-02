using System;
using System.Collections.Generic;
using System.Text;

namespace ToyAssignment.Model
{
    class Order
    {
        public int Ordertableid {get; set;}
        public int Orderid { get; set; }
        public string cusomerName { get; set; }
        public Toy Toy { get; set;}
        public int offerid { get; set; } 

        public int Totalprice { get; set; }
        public int Discount { get; set; }
        public int Finalprice { get; set; }
    }
}
