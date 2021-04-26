using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class PlantOfToy
    {
        public int PlantId { get; set; }
        public int ToyId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Plant Plant { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Toy Toy { get; set; }
    }
}
