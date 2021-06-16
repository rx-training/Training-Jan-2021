﻿using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class Trip
    {
        public Trip()
        {
            RatingRiders = new HashSet<RatingRider>();
            Ratings = new HashSet<Rating>();
        }

        public long TripId { get; set; }
        public long RiderId { get; set; }
        public long DriverId { get; set; }
        public long SourceLocationId { get; set; }
        public long DestinationLocationId { get; set; }
        public long RideTypeId { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public string Status { get; set; }
        public double? EstimatedFairAmount { get; set; }
        public double? ActualFairAmount { get; set; }
        public string PaymentMethod { get; set; }
        public string CancelledBy { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Location DestinationLocation { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Driver Driver { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual RideType RideType { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Rider Rider { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual Location SourceLocation { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<RatingRider> RatingRiders { get; set; }
        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}
