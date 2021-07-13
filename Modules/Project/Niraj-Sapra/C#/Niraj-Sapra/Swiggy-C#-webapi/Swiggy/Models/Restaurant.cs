using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Restaurant
    {
        public int RestaurantId { get; set; }
        public string RestaurantName { get; set; }
        public string RestaurantCity { get; set; }
        public decimal RestFoodPricetwoperson { get; set; }
        public string RestorentImage { get; set; }
        public int? Offer1id { get; set; }
        public int? Offer2id { get; set; }
        public int? Payment1id { get; set; }
        public int? Payment2id { get; set; }
        public string Restaurantfoodtype { get; set; }
    }
}
