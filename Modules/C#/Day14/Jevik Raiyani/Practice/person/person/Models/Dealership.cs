using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Dealership
    {
        public Dealership()
        {
            Inventories = new HashSet<Inventory>();
            Sales = new HashSet<Sale>();
            Worksats = new HashSet<Worksat>();
        }

        public int Dealershipid { get; set; }
        public string DealerName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        public virtual ICollection<Inventory> Inventories { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
        public virtual ICollection<Worksat> Worksats { get; set; }
    }
}
