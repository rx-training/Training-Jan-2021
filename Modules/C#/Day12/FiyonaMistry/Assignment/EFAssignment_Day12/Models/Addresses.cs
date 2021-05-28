using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12.Models
{
    public class Addresses
    {
        [Key]
        public int AdId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Pincode { get; set; }

        public int CustId { get; set; }
        public Customers Customers { get; set; }       // FK from Customer table 

        public ICollection<Orders> Orders { get; set; }       // For Order table FK
    }
}
