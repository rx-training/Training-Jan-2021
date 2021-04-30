using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class ApplicableIncentive
    {
        public long DriverId { get; set; }
        public long IncentiveId { get; set; }
        public bool IsDisabled { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Driver Driver { get; set; }
        public virtual Incentive Incentive { get; set; }
    }
}
