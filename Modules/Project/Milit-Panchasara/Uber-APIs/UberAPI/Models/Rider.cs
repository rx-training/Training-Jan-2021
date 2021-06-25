using System;
using System.Collections.Generic;
using UberAPI.Models.Auth;

#nullable disable

namespace UberAPI.Models
{
    public partial class Rider
    {
        public Rider()
        {
            RatingRiders = new HashSet<RatingRider>();
            Ratings = new HashSet<Rating>();
            Trips = new HashSet<Trip>();
        }

        public long RiderId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool EmailVerified { get; set; }
        public bool? IsNew { get; set; }
        public decimal ContactNumber { get; set; }
       // public string Password { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
        public string InviteCode { get; set; }
        public string Country { get; set; }
        public bool? IsBlocked { get; set; }
        public bool? IsLoggedIn { get; set; }
        public DateTime? SessionExpiresIn { get; set; }

        public virtual ICollection<RatingRider> RatingRiders { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
        public virtual ICollection<Trip> Trips { get; set; }
        public AppUser User { get; set; }
        public string UserId { get; set; }
    }
}
