using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Salesperson
    {
        public Salesperson()
        {
            ReportstoManagingsalespeople = new HashSet<Reportsto>();
            ReportstoSalespeople = new HashSet<Reportsto>();
            Sales = new HashSet<Sale>();
            Worksats = new HashSet<Worksat>();
        }

        public int Salespersonid { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Reportsto> ReportstoManagingsalespeople { get; set; }
        public virtual ICollection<Reportsto> ReportstoSalespeople { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
        public virtual ICollection<Worksat> Worksats { get; set; }
    }
}
