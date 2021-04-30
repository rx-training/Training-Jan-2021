using System;
using System.Collections.Generic;

#nullable disable

namespace Day14.Models
{
    public partial class TypeOfToy
    {
        public TypeOfToy()
        {
            Toys = new HashSet<Toy>();
        }

        public int TypeId { get; set; }
        public string TypeName { get; set; }

        public virtual ICollection<Toy> Toys { get; set; }
    }
}
