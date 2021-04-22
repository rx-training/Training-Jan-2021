using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class TypeOfToy
    {
        public TypeOfToy()
        {
            Toys = new HashSet<Toy>();
        }

        public int TypeId { get; set; }
        public string ToyType { get; set; }
        public int? PlantsPlantId { get; set; }

        public virtual Plant PlantsPlant { get; set; }
        public virtual ICollection<Toy> Toys { get; set; }
    }
}
