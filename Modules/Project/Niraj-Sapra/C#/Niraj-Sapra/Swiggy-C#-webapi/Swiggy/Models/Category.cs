using System;
using System.Collections.Generic;

#nullable disable

namespace Swiggy.Models
{
    public partial class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int ResId { get; set; }
        public string ResName { get; set; }
    }
}
