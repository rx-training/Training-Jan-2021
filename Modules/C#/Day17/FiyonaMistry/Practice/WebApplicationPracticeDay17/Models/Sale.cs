using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class Sale
    {
        public int SaleId { get; set; }
        public int Vin { get; set; }
        public int CustomerId { get; set; }
        public int SalesPersonId { get; set; }
        public int DealershipId { get; set; }
        public int SalePrice { get; set; }
        public DateTime SaleDate { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual Dealership Dealership { get; set; }
        public virtual SalesPerson SalesPerson { get; set; }
        public virtual Car VinNavigation { get; set; }
    }
}
