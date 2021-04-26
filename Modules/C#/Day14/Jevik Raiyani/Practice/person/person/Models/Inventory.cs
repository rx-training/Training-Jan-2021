using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Inventory
    {
        public int Inventoryid { get; set; }
        public int? Vin { get; set; }
        public int? Dealershipid { get; set; }

        public virtual Dealership Dealership { get; set; }
        public virtual Car VinNavigation { get; set; }
    }
}
