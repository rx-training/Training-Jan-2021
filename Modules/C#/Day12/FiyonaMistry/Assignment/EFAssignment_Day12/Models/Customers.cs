using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFAssignment_Day12.Models
{
    public class Customers
    {
        [Key]
        public int CustId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public char Gender { get; set; }
        public DateTime DOB { get; set; }
        public string Email { get; set; }
        public Int64 PhoneNumber { get; set; }

        public ICollection<Addresses> Addresses { get; set; }     // For Address table FK

        public ICollection<Orders> Orders { get; set; }     // For Order table FK
    }
}
