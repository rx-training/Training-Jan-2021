using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class SalesPerson
    {
        public SalesPerson()
        {
            ReportsToManagingSalesPeople = new HashSet<ReportsTo>();
            ReportsToSalesPeople = new HashSet<ReportsTo>();
            Sales = new HashSet<Sale>();
            WorksAts = new HashSet<WorksAt>();
        }

        public int SalesPersonId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<ReportsTo> ReportsToManagingSalesPeople { get; set; }
        public virtual ICollection<ReportsTo> ReportsToSalesPeople { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
        public virtual ICollection<WorksAt> WorksAts { get; set; }
    }
}
