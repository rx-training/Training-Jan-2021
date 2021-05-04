
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignement_2_.Models
{
    public class Orders
    {
        [Key]
        public int OrderID { get; set; }
        public int CId { get; set; }
        public ICollection<OrderedItems> OrderedItems { get; set; }
        public void Display(Customers c1)
        {
            Console.WriteLine(OrderID);
            Console.WriteLine(c1.CId);
        }
        
    }
}
