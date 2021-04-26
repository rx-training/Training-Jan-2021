using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Plant
    {
        public Plant()
        {
            PlantOfToys = new HashSet<PlantOfToy>();
        }

        public int Id { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public virtual ICollection<PlantOfToy> PlantOfToys { get; set; }
    }
}
