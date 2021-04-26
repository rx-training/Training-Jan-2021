using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class ManufacturingPlantToy
    {
        public int ManufacturingPlantId { get; set; }
        public int ToyId { get; set; }

        public virtual ManufacturingPlant ManufacturingPlant { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
