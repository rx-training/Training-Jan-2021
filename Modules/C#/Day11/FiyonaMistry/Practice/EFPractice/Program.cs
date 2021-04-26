using System;
using Microsoft.EntityFrameworkCore;
using EFPractice_Day11.Models;
using System.Linq;

namespace EFPractice_Day11
{
    class Program
    {
        static void Main(string[] args)
        {
            var adventureWorks = new AdventureWorks2012Context();  // the context class
            var emp = adventureWorks.Employees.Where(a => a.BusinessEntityId == 12);  // the data needed
            foreach (var item in emp)
            {
                Console.WriteLine($"{item.BusinessEntityId} {item.Gender} {item.JobTitle}");  // data iterated through field column
            }

            // add
            var cur = new Currency() { CurrencyCode = "ABC", Name = "Test" };
            var add = adventureWorks.Currencies.Add(cur);
            Console.WriteLine(add);
            adventureWorks.SaveChanges();

            // update
            var update = adventureWorks.Employees.First(a => a.BusinessEntityId == 22);
            update.JobTitle = "Marketing Manager";
            Console.WriteLine("Value updated");
            adventureWorks.SaveChanges();

            // delete
            var del = adventureWorks.JobCandidates.First(a => a.JobCandidateId == 4);
            adventureWorks.Remove(del);
            adventureWorks.SaveChanges();


            // include
            var businessEntity = adventureWorks.Addresses.Where(a => a.AddressId == 34)
                .Include(a => a.BusinessEntityAddresses);

            foreach (var item in businessEntity)
            {
                foreach (var item1 in item.BusinessEntityAddresses)
                {
                    Console.WriteLine($"{item1.AddressId} {item1.BusinessEntityId} {item.City}");
                }
            }
        }
    }
}
