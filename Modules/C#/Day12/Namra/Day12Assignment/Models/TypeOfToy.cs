using System;
using System.Collections.Generic;
using System.Text;

namespace Day12Assignment.Models
{
    class TypeOfToy
    {
        public int TypeId { get; set; }
        public string TypeName { get; set; }
        public ICollection<Toy> Toys { get; set; }

    }
}
