using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class Incentive
    {
        public long IncentiveId { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
