using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class ManufacturingPlant
    {
        public ManufacturingPlant()
        {
            ManufacturingPlantToys = new HashSet<ManufacturingPlantToy>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ICollection<ManufacturingPlantToy> ManufacturingPlantToys { get; set; }
    }
}
