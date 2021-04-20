using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_13Assignment.Models
{
    public partial class Toy
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public int Qty { get; set; }

        public int ToyCategoryId { get; set; }
        public ToyCategory ToyCategory { get; set; }

        public ICollection<ManufacturingPlantToy> ManufacturingPlantToys { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
