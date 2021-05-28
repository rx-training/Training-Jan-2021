using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAssignment_Day12.Models;
using Microsoft.EntityFrameworkCore;

namespace EFAssignment_Day12
{
    public class DisplayToys
    {
        public void Display()
        {
            Console.WriteLine();

            using (var context = new ToyManufacturingContext())
            {
                var dis = context.Toys.FromSqlRaw("Select * from Toys");

                Console.WriteLine("\tId\tName\t\t\tDescription\t\tAmount\tPlant Id");
                foreach (var item in dis)
                {
                    Console.WriteLine($"\t{item.ToyId}\t{item.ToyName}\t\t{item.Description}\t{item.Amount}\t{item.PlantId}");
                }
            }

            Console.WriteLine();
        }
    }
}
