using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class Product
    {
        public Product()
        {
            Orders = new HashSet<Order>();
            Sales = new HashSet<Sale>();
        }

        public string ProductCode { get; set; }
        public decimal? ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImage { get; set; }
        public int? SubCategoryId { get; set; }
        public int? BrandId { get; set; }
        public double? Discount { get; set; }
        public int? Quantity { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
