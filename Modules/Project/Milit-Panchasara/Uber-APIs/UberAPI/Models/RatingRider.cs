using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class RatingRider
    {
        public long RatingId { get; set; }
        public long RiderId { get; set; }
        public long DriverId { get; set; }
        public long TripId { get; set; }
        public string Comments { get; set; }
        public string MediaAttached { get; set; }
        public double RatingOfRider { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }


        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Driver Driver { get; set; }


        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Rider Rider { get; set; }


        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Trip Trip { get; set; }
    }
}
