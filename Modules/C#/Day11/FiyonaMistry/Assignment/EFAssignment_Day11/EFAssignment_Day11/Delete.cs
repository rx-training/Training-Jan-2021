using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using EFAssignment_Day11.Models;

namespace EFAssignment_Day11
{
    public class Delete
    {
        public void DeleteDoctor()
        {
            // Display current data
            Display dis = new Display();
            dis.DisplayDoctors();

            int id;

            // User input for which data to delete
            Console.Write("Enter ID to be updated : ");
            id = Convert.ToInt32(Console.ReadLine());

            using (var context = new Day11Context())
            {
                // Deleting the specified data 
                var del = context.Doctors.Single(d => d.DocId == id);
                context.Remove(del);
                context.SaveChanges();
            }

            // Display data after deleting
            Console.WriteLine("Data deleted successfully, have a look....");
            dis.DisplayDoctors();
            Console.WriteLine();
        }
    }
}