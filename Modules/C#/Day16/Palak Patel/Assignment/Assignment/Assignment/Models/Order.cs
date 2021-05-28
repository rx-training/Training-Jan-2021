using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public Toy[] OrderItem { get; set; }
        public int PayAmount
        {
            get
            {
                return PayAmount;
            }
            set
            {
                var amount = 0;
                foreach (var item in OrderItem)
                {
                    amount += Convert.ToInt32(from t in Toy where t.ToyName == item.ToyName select t.Price);
                }
                PayAmount = amount;
            }
        }

        public ICollection<Toy> Toy { get; set; }
    }
}
