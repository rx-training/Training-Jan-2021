using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class Plant
    {
        public int PlantId { get; set; }
        public string PlantName { get; set; }

        public ICollection<Toy> Toy { get; set; }
    }
}
