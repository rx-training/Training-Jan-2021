using System;
using System.Collections.Generic;

#nullable disable

namespace ToyCompanyAPI.Models
{
    public partial class ToyCategory
    {
        public ToyCategory()
        {
            Toys = new HashSet<Toy>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Toy> Toys { get; set; }
    }
}
