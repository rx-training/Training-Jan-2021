using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class ProductDescription
    {
        public int ProductDescriptionId { get; set; }
        public int ProductId { get; set; }
        public string ProductDescription1 { get; set; }
        public string ExtraDescription { get; set; }
        public string RelatedCategory { get; set; }
        public DateTime? DescriptionDate { get; set; }

        public virtual Product Product { get; set; }
    }
}
