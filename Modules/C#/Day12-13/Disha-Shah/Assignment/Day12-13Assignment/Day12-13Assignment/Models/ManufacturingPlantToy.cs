using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_13Assignment.Models
{
    public partial class ManufacturingPlantToy
    {
        public int ManufacturingPlantId { get; set; }
        public ManufacturingPlant ManufacturingPlant { get; set; }

        public int ToyId { get; set; }
        public Toy Toy { get; set; }
    }
}
