
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace Assignement_2_.Models
{
    public class ShipAddresses
    {
        [Key]
        public int ShipID { get; set; }
        // public int NewShipID { get; set; }

        public int CustomerID { get; set; }
        //  public int CustomerIDForShip { get; set; }
        public Customers Customer { get; set; }
        public string Address { get; set; }
        public void AddAddress(Customers c1)
        {
            Console.WriteLine("Enter Your Address");
            Address = Console.ReadLine();
            CustomerID = c1.CId;

        }
          public void AddonotherAddress(Customers c1)
        {
            Console.WriteLine("Enter Your Address");
            Address = Console.ReadLine();
            CustomerID = c1.CId;

        }

    }
}
