using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Incentive
    {
        public string EmpRefId { get; set; }
        public string IncentiveDate { get; set; }
        public int? IncentiveAmount { get; set; }

        public virtual Employee EmpRef { get; set; }
    }
}
