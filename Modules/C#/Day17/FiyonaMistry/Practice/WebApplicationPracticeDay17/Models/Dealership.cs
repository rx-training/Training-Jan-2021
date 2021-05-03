using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class Dealership
    {
        public Dealership()
        {
            Inventories = new HashSet<Inventory>();
            Sales = new HashSet<Sale>();
            WorksAts = new HashSet<WorksAt>();
        }

        public int DealershipId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public virtual ICollection<Inventory> Inventories { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
        public virtual ICollection<WorksAt> WorksAts { get; set; }
    }
}
