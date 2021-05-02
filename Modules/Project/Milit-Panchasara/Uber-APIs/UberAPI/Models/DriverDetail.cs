using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class DriverDetail
    {
        public long? DriverId { get; set; }
        public string DrivingLicense { get; set; }
        public string AadharCard { get; set; }
        public string PanCard { get; set; }
        public string OtherDocument { get; set; }
        public string CurrentAddress { get; set; }
        public string PermenantAddress { get; set; }

        public string Country { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Driver Driver { get; set; }
    }
}
