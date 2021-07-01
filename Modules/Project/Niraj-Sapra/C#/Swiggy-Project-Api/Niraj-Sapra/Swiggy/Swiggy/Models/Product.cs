﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductImage { get; set; }
        public int Categoryid { get; set; }
        public int RestaurantId { get; set; }
    }
}
