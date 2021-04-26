using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Worksat
    {
        public int Worksatid { get; set; }
        public int? Salespersonid { get; set; }
        public int? Dealershipid { get; set; }
        public int? Monthworked { get; set; }
        public int? Basesalaryformonth { get; set; }

        public virtual Dealership Dealership { get; set; }
        public virtual Salesperson Salesperson { get; set; }
    }
}
