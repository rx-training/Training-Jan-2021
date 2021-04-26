using System;
using System.Collections.Generic;

#nullable disable

namespace ToyStoreApi.Models
{
    public partial class Toy
    {
        public Toy()
        {
            OrderedItems = new HashSet<OrderedItem>();
        }

        public int ToyId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int? CategoriesCategoryId { get; set; }

        public virtual Category CategoriesCategory { get; set; }
        public virtual ICollection<OrderedItem> OrderedItems { get; set; }
    }
}
