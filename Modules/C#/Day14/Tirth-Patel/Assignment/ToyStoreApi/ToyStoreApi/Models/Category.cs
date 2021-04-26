using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class Category
    {
        public Category()
        {
            Toys = new HashSet<Toy>();
        }

        public int CategoryId { get; set; }
        public string CName { get; set; }
        public int ManufacturingPlantId { get; set; }

        public virtual ICollection<Toy> Toys { get; set; }
    }
}
