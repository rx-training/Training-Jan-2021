using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationAssignmentDay14.Models
{
    public partial class Toy
    {
        public Toy()
        {
            OrderToys = new HashSet<OrderToy>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
        public int PlantId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]

        public virtual ManufacturingPlant Plant { get; set; }
        public virtual ICollection<OrderToy> OrderToys { get; set; }
    }
}
