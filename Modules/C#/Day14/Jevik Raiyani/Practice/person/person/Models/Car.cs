using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Car
    {
        public Car()
        {
            Inventories = new HashSet<Inventory>();
            Sales = new HashSet<Sale>();
        }

        public int Carid { get; set; }
        public int Vin { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public double Mileage { get; set; }
        public double Askprice { get; set; }
        public double Invoiceprice { get; set; }

        public virtual ICollection<Inventory> Inventories { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
