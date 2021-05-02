using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Restorent
    {
        public Restorent()
        {
            Categories = new HashSet<Category>();
            Products = new HashSet<Product>();
        }

        public int RestorentId { get; set; }
        public string RestorentName { get; set; }
        public string RestorentCity { get; set; }
        public decimal? RestFoodPricetwoperson { get; set; }
        public string RestorentImage { get; set; }

        public virtual ICollection<Category> Categories { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
