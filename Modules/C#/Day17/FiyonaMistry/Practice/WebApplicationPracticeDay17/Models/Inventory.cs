using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class Inventory
    {
        public int InventoryId { get; set; }
        public int Vin { get; set; }
        public int DealershipId { get; set; }

        public virtual Dealership Dealership { get; set; }
        public virtual Car VinNavigation { get; set; }
    }
}
