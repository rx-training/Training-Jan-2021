using ConsoleApp1.Model;
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            TESTContext testDBContext = new TESTContext();
            foreach (var item in testDBContext.Customers)
            {
                Console.WriteLine(item.Cname + " " + item.City);
            }

            var result =testDBContext.Customers.Where(p => p.City == "MUMBAI");

            foreach (var item in result)
            {
                Console.WriteLine(item.Cname + " " + item.City);
            }

            //Customer customer = new Customer() { Cname = "JEVIK", City = "RAJKOT" };
            //testDBContext.Customers.Add(customer);
            //testDBContext.SaveChanges();


            var res = testDBContext.Customers.Include(p => p.Deposits);
            foreach (var item in res)
            {
                Console.WriteLine($" {item.City}  {item.Cname}  {item.Deposits.Count}");

            }

        }
    }
}
