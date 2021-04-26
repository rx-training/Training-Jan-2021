using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
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

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<PlantOfToy> PlantOfToys { get; set; }
    }
}
