using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class Product
    {
        public Product()
        {
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
            PlacedOrders = new HashSet<PlacedOrder>();
            ProductDescriptions = new HashSet<ProductDescription>();
            SellerProducts = new HashSet<SellerProduct>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public byte ProdutValidity { get; set; }
        public int CategoryId { get; set; }
        public int BrandId { get; set; }
        public byte Offer { get; set; }
        public DateTime? ProductDate { get; set; }
        public string ImgPath { get; set; }

        public virtual Brand Brand { get; set; }
        public virtual Category Category { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<PlacedOrder> PlacedOrders { get; set; }
        public virtual ICollection<ProductDescription> ProductDescriptions { get; set; }
        public virtual ICollection<SellerProduct> SellerProducts { get; set; }
    }
}
