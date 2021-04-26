using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class PlantOfToy
    {
        public int PlantId { get; set; }
        public int ToyId { get; set; }

        public virtual Plant Plant { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
