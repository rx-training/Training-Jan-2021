using System;
using System.Collections.Generic;
using System.Text;

namespace Assignmwnt10.Models
{
    public class ManufacturingPlant
    {
        public int ManufacturingPlantId { get; set; }
        public string ManufacturingPlantName { get; set; }
        public string ManufacturingPlantAddress { get; set; }
        public int ToyId { get; set; }
        public Toy toy { get; set; }
    }
}
