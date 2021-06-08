using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class MostSaledProduct
    {
        public string ProductCode { get; set; }
        public long? Rank { get; set; }
    }
}
