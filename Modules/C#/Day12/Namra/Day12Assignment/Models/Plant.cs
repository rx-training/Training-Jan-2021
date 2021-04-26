using System;
using System.Collections.Generic;
using System.Text;

namespace Day12Assignment.Models
{
    class Plant
    {
        public int PlantId { get; set; }
        public string PlantName { get; set; }
        public ICollection<Toy> Toys { get; set; }
    }
}
