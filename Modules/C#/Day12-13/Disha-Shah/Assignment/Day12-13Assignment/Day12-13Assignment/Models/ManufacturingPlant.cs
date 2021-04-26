using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_13Assignment.Models
{
    public partial class ManufacturingPlant
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public ICollection<ManufacturingPlantToy> ManufacturingPlantToys { get; set; }
    }
}
