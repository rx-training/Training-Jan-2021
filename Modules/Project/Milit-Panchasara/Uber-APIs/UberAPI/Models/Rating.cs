using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class Rating
    {
        public long RatingId { get; set; }
        public long RiderId { get; set; }
        public long DriverId { get; set; }
        public long TripId { get; set; }
        public string Comments { get; set; }
        public string MediaAttached { get; set; }
        public double RatingOfDriver { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual Driver Driver { get; set; }
        public virtual Rider Rider { get; set; }
        public virtual Trip Trip { get; set; }
    }
}
