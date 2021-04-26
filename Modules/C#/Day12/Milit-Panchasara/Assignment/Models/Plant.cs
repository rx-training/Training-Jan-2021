using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class Plant
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public ICollection<PlantOfToy> PlantOfToys { get; set; }
    }
}
