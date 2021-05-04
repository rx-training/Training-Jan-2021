using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Plant
    {
        public Plant()
        {
            Toys = new HashSet<Toy>();
        }

        public int PlantId { get; set; }
        public string PlantName { get; set; }
        public string City { get; set; }

        public virtual ICollection<Toy> Toys { get; set; }
    }
}
