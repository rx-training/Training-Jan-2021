using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class Plant
    {
        public int PlantId { get; set; }
        public string PlantName { get; set; }

        public ICollection<Toy> Toy { get; set; }
    }
}
