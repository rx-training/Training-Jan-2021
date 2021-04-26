
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace Assignement_2_.Models
{
    //[Index(nameof(ShipID), IsUnique = true)]
    public class Customers
    {

        [Key]
        public int CId { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }

        public ICollection<Orders> Orders { get; set; }

        public ICollection<ShipAddresses> Addresses { get; set; }
        public void AddCustomer()
        {

            var ctx = new BrainsmithContext();
            Console.WriteLine("Enter Your Name");
            Name = Console.ReadLine();
            Console.WriteLine("Enter Your Contact");
            Contact = Console.ReadLine();









        }

    }
}
