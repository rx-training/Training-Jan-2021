using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Assignment.Models
{
    class Order
    {
        public int OrderId { get; set; }
        public string OrderItem { get; set; }
        public int PayAmount  
        { set
            {
                var amount = from t in Toy where t.ToyName == OrderItem select t.Price;
                PayAmount = Convert.ToInt32(amount);
            } 
        }

        public ICollection<Toy> Toy { get; set; }
    }
}
