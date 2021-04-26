using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class Toy
    {
        public Toy()
        {
            Orders = new HashSet<Order>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int? TypeOfToyTypeId { get; set; }
        public int ToyPrice { get; set; }

        public virtual TypeOfToy TypeOfToyType { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
