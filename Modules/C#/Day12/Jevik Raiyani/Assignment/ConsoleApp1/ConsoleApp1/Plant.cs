using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1
{
    public partial class Plant
    {
        public Plant()
        {
            TypeOfToys = new HashSet<TypeOfToy>();
        }

        public int PlantId { get; set; }
        public string PlantName { get; set; }

        public virtual ICollection<TypeOfToy> TypeOfToys { get; set; }
    }
}
