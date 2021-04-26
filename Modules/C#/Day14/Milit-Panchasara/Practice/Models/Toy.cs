using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Toy
    {
        public Toy()
        {
            OrderItems = new HashSet<OrderItem>();
            PlantOfToys = new HashSet<PlantOfToy>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public virtual ICollection<PlantOfToy> PlantOfToys { get; set; }
    }
}
