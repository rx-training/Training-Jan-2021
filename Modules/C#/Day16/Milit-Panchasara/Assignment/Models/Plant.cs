using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
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
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<PlantOfToy> PlantOfToys { get; set; }
    }
}
