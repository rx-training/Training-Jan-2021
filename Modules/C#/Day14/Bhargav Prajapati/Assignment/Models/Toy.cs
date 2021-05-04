using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Toy
    {
        public Toy()
        {
            ToysPeople = new HashSet<ToysPerson>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int ToyPrice { get; set; }
        public int? PlantsPlantId { get; set; }

        public virtual Plant PlantsPlant { get; set; }
        public virtual ICollection<ToysPerson> ToysPeople { get; set; }
    }
}
