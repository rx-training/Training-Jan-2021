using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAssignment_Day12.Models;

namespace EFAssignment_Day12
{
    public class AddCustomer
    {
        public void Add()
        {
            DisplayState displayState = new DisplayState();

            Console.WriteLine();

            // Enter new data from user
            Console.Write("Enter First Name : ");
            string fname = Console.ReadLine();
            Console.Write("Enter Last Name : ");
            string lname = Console.ReadLine();
            Console.Write("Enter Gender : ");
            char gender = Convert.ToChar(Console.ReadLine());
            Console.Write("Enter DOB : ");
            DateTime dt = Convert.ToDateTime(Console.ReadLine());
            Console.Write("Enter Email Id : ");
            string email = Console.ReadLine();
            Console.Write("Enter Phone Number : ");
            long phone = Convert.ToInt64(Console.ReadLine());

            using (var context = new ToyManufacturingContext())
            {
                // Add data in Table
                var cust = new Customers() { FirstName = fname, LastName = lname, Gender = gender, DOB = dt, Email = email, PhoneNumber = phone };
                context.Add(cust);

                // Displays State of Entity
                displayState.State(context.ChangeTracker.Entries());

                context.SaveChanges();
            }

            Console.WriteLine();
        }
    }
}
