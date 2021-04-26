using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12.Models
{
    public class Orders
    {
        [Key]
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public int Items { get; set; }
        public double Price { get; set; }

        public int CustId { get; set; }
        public Customers Customers { get; set; }      // FK from Customers Table

        public int AdId { get; set; }
        public Addresses Addresses { get; set; }      // FK from Address Table

        public IList<OrderToys> OrderToys { get; set; }    // M-M with Toys table 
    }
}
