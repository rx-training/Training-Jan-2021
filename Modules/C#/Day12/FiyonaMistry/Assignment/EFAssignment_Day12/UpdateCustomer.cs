using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAssignment_Day12.Models;

namespace EFAssignment_Day12
{
    public class UpdateCustomer
    {
        public void Update()
        {
            DisplayState displayState = new DisplayState();

            Console.WriteLine();

            Console.Write("Enter id for which id to update : ");
            int id = Convert.ToInt32(Console.ReadLine());

            // Enter new data from user for updating
            Console.Write("Enter First Name : ");
            string fname = Console.ReadLine();
            Console.Write("Enter Last Name : ");
            string lname = Console.ReadLine();
            Console.Write("Enter Gender : ");
            char gender = Convert.ToChar(Console.ReadLine());
            Console.Write("Enter DOB : ");
            DateTime dt = Convert.ToDateTime(Console.ReadLine());
            Console.Write("Enter Email : ");
            string email= Console.ReadLine(); 
            Console.Write("Enter Phone Number : ");
            long phoneNumber = Convert.ToInt64(Console.ReadLine());

            using (var context = new ToyManufacturingContext())
            {
                // Update data in table
                var update = context.Customers.Single(c => c.CustId == id);
                update.FirstName = fname;
                update.LastName = lname;
                update.PhoneNumber = phoneNumber;
                update.Gender = gender;
                update.DOB = dt;
                update.Email = email;

                // Displays State of Entity
                displayState.State(context.ChangeTracker.Entries());

                context.SaveChanges();
            }

            Console.WriteLine();
        }
    }
}
