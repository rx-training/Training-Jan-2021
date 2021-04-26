using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12.Models
{
    public class OrderToys
    {
        public int ToyId { get; set; }
        public Toys Toys { get; set; }    // Composite PK for Customer Table

        public int OrderId { get; set; }
        public Orders Orders { get; set; }      // Composite PK for Order Table
    }
}
