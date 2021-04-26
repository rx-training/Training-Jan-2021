using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Reportsto
    {
        public int Reportstoid { get; set; }
        public int? Salespersonid { get; set; }
        public int? Managingsalespersonid { get; set; }

        public virtual Salesperson Managingsalesperson { get; set; }
        public virtual Salesperson Salesperson { get; set; }
    }
}
