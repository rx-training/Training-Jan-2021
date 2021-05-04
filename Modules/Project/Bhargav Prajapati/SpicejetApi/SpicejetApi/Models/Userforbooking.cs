using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Userforbooking
    {
        public Userforbooking()
        {
            Flighttrips = new HashSet<Flighttrip>();
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserType { get; set; }
        public string Gender { get; set; }
        public int MobliNo { get; set; }
        public int UserId { get; set; }

        public virtual ICollection<Flighttrip> Flighttrips { get; set; }
    }
}
