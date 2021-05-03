using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPracticeDay17.Models
{
    public partial class Car
    {
        public Car()
        {
            Inventories = new HashSet<Inventory>();
            Sales = new HashSet<Sale>();
        }

        public int CarId { get; set; }
        public int Vin { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public decimal Year { get; set; }
        public double Mileage { get; set; }
        public double AskPrice { get; set; }
        public double InvoicePrice { get; set; }

        public virtual ICollection<Inventory> Inventories { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
