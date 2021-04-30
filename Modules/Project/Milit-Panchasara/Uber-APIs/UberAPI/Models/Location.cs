using System;
using System.Collections.Generic;

#nullable disable

namespace UberAPI.Models
{
    public partial class Location
    {
        public Location()
        {
            TripDestinationLocations = new HashSet<Trip>();
            TripSourceLocations = new HashSet<Trip>();
        }

        public long LocationId { get; set; }
        public string LocationName { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Trip> TripDestinationLocations { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public virtual ICollection<Trip> TripSourceLocations { get; set; }
    }
}
