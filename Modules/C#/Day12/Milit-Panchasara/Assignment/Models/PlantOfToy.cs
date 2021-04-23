using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class PlantOfToy
    {
        public int PlantId { get; set; }
        public Plant Plant { get; set; }

        public int ToyId { get; set; }
        public Toy Toy { get; set; }
    }
}
