using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class Toy
    {
        public Toy()
        {
            ManufacturingPlantToys = new HashSet<ManufacturingPlantToy>();
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Qty { get; set; }
        public int ToyCategoryId { get; set; }

        public virtual ToyCategory ToyCategory { get; set; }
        public virtual ICollection<ManufacturingPlantToy> ManufacturingPlantToys { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
