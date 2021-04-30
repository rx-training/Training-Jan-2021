using System;
using System.Collections.Generic;
using UberAPI.Models.Auth;

#nullable disable

namespace UberAPI.Models
{
    public partial class Driver
    {
        public Driver()
        {
            RatingRiders = new HashSet<RatingRider>();
            Ratings = new HashSet<Rating>();
            Trips = new HashSet<Trip>();
            Vehicles = new HashSet<Vehicle>();
        }

        public long DriverId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool EmailVerified { get; set; }
        public decimal ContactNumber { get; set; }
        public int TotalRidesDone { get; set; }
        public int TotalRidesCancelled { get; set; }
        public double? Salary { get; set; }
        public bool? IsBlocked { get; set; }
        public bool? IsLoggedIn { get; set; }
        public DateTime? SessionExpiresIn { get; set; }
        public string Password { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public virtual ICollection<RatingRider> RatingRiders { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
        public virtual ICollection<Trip> Trips { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }

        public AppUser User { get; set; }
        public string UserId { get; set; }
    }
}
