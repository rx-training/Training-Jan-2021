using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAssignment_Day12.Models;
using Microsoft.EntityFrameworkCore;

namespace EFAssignment_Day12
{
    public class DisplayCustomer
    {
        public void Display()
        {
            using (var context = new ToyManufacturingContext())
            {
                Console.WriteLine();

                var dis = context.Customers.FromSqlRaw("Select * from Customers");

                Console.WriteLine("\tId\tName\t\tGender\tDOB\t\tPhone Number\tEmail");
                foreach (var item in dis)
                {
                    Console.WriteLine($"\t{item.CustId}\t{item.FirstName + " " + item.LastName}\t{item.Gender}\t{item.DOB.ToShortDateString()}\t{item.PhoneNumber}\t{item.Email}");
                }

                Console.WriteLine();
            }
        }
    }
}
