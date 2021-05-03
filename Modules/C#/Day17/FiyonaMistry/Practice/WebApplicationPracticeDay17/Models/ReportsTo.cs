using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class ReportsTo
    {
        public int ReportsToId { get; set; }
        public int SalesPersonId { get; set; }
        public int ManagingSalesPersonId { get; set; }

        public virtual SalesPerson ManagingSalesPerson { get; set; }
        public virtual SalesPerson SalesPerson { get; set; }
    }
}
