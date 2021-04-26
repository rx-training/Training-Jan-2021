using System;
using System.Collections.Generic;
using System.Text;

namespace Day12_13Assignment.Models
{
    public partial class ToyCategory
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<Toy> Toys { get; set; }
    }
}
