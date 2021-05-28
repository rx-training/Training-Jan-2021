using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAssignment_Day12.Models;

namespace EFAssignment_Day12
{
    public class DeleteCustomer
    {
        public void Delete()
        {
            Console.WriteLine();

            DisplayState displayState = new DisplayState();

            int id;

            // User input for which data to delete
            Console.Write("Enter ID to be deleted : ");
            id = Convert.ToInt32(Console.ReadLine());

            using (var context = new ToyManufacturingContext())
            {
                // Deleting the specified data 
                var del = context.Customers.Single(c => c.CustId == id);
                context.Remove(del);

                // Displays State of Entity
                displayState.State(context.ChangeTracker.Entries());

                context.SaveChanges();
            }

            Console.WriteLine();
        }
    }
}
