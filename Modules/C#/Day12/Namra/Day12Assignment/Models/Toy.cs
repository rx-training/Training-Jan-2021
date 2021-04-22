using System;
using System.Collections.Generic;
using System.Text;

namespace Day12Assignment.Models
{
    class Toy
    {
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int Price { get; set; }
        
        public int TypeId { get; set; }
        public TypeOfToy TypeOfToy { get; set; }

        public int PlantId { get; set; }
        public Plant Plant { get; set; }

        //public ICollection<Toy> Toys{ get; set; }
        //public ICollection<Customer> Customers { get; set; }
        //public ICollection<Order> Orders { get; set; }
    }

}
