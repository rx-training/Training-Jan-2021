using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Sale
    {
        public int Saleid { get; set; }
        public int? Vin { get; set; }
        public int? Customerid { get; set; }
        public int? Salespersonid { get; set; }
        public int? Dealershipid { get; set; }
        public double? Saleprice { get; set; }
        public DateTime? Saledate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Dealership Dealership { get; set; }
        public virtual Salesperson Salesperson { get; set; }
        public virtual Car VinNavigation { get; set; }
    }
}
