using System;
using System.Collections.Generic;

#nullable disable

namespace Day14.Models
{
    public partial class Toy
    {
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int Price { get; set; }
        public int TypeId { get; set; }
        public int PlantId { get; set; }

        public virtual Plant Plant { get; set; }
        public virtual TypeOfToy Type { get; set; }
    }
}
