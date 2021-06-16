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
        public string ExtraDescription { get; set; } //Class labels : Top beauty , top electronics..
        public string RelatedCategory { get; set; } // cloth, electronic..
        public DateTime? DescriptionDate { get; set; }

        public virtual Product Product { get; set; }
    }
}
