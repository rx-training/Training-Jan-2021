using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class WorksAt
    {
        public int WorksAtId { get; set; }
        public int SalesPersonId { get; set; }
        public int DealershipId { get; set; }
        public int MonthWorked { get; set; }
        public int BaseSalaryForMonth { get; set; }

        public virtual Dealership Dealership { get; set; }
        public virtual SalesPerson SalesPerson { get; set; }
    }
}
