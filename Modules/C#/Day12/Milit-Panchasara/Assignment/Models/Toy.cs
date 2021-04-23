using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class Toy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public ICollection<PlantOfToy> PlantOfToys { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
    }
}
