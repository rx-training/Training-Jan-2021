using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12.Models
{
    public class Toys
    {
        [Key]
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }

        public int PlantId { get; set; }
        public ManufacturingPlant ManufacturingPlant { get; set; }       // FK from manufacturing plant table

        public IList<OrderToys> OrderToys { get; set; }    // M-M with Order table 
    }
}
