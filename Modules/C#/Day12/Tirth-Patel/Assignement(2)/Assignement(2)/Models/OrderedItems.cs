
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignement_2_.Models
{

    public class OrderedItems
    {
        [Key]
        public int OrderedItemId { get; set; }
        public int OrderID { get; set; }
        public int ToysID { get; set; }
        public int Quantity { get; set; }
        public int Amount { get; set; }
        public Toys Toys { get; set; }
        public void display()
        {
            Console.WriteLine(OrderedItemId);
            Console.WriteLine(OrderID);
            Console.WriteLine(ToysID);
            Console.WriteLine(Quantity);
            Console.WriteLine(Amount);
        }

    }
}
