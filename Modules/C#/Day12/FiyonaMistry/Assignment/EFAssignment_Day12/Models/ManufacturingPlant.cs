using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12.Models
{
    public class ManufacturingPlant
    {
        [Key]
        public int PlantId { get; set; }
        public string PlantName { get; set; }

        public ICollection<Toys> Toys { get; set; }   //Toys table linked with manufacturing plant
    }
}
