using EFCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace EFCore
{
    class EFCorePractice1
    {
        static void Main(string[] args)
        {
            using (var context = new TestDBContext())
            {
                var allBorrowers = context.Borrows
                                        .OrderByDescending(x=>x.Amount)
                                        .ToList();
                Console.WriteLine("All Borrowers:");
                foreach (var item in allBorrowers)
                {
                    Console.WriteLine($"{item.LoanNo} {item.Cname} {item.Bname} {item.Amount}");
                }

                Console.WriteLine();

                var customersWithSameAmount = context.Borrows
                                                    .Where(x => x.Amount==3000)
                                                    .OrderBy(x=> x.Cname)
                                                    .ToList();
                Console.WriteLine("All customers with amount = 3000 in ascending order");
                foreach (var item in customersWithSameAmount)
                {
                    Console.WriteLine($"{item.Cname} {item.Amount}");
                }

                Console.WriteLine();

                var customerWithAmount = context.Borrows
                                                .Single(x => x.Amount == 1000);
                                                    
                Console.WriteLine("Single customer with amount = 1000");
                Console.WriteLine($"{customerWithAmount.Cname} {customerWithAmount.Amount}");

                Console.WriteLine();
                var customerNameWithAmount = context.Borrows
                                                    .Select(x => new
                                                    {
                                                        custName = x.Cname,
                                                        custAmount = x.Amount,
                                                        custBranch = x.Bname,
                                                        BranchCity = x.BnameNavigation.City
                                                    });

                Console.WriteLine("Customer details with their branch and city:");
                foreach (var item in customerNameWithAmount)
                {
                    Console.WriteLine($"{item.custName} {item.custAmount} {item.custBranch} {item.BranchCity}");
                }

                // Insert Data in DB
                var cust = new Customer() { Cname = "Reena", City = "Ahmedabad" };
                context.Customers.Add(cust);
                context.SaveChanges();

                // Update Data in DB
                var updateCust = context.Customers
                                       .SingleOrDefault<Customer>(x => x.Cname == "Reena");

                updateCust.City = "Mumbai";
                context.SaveChanges();

                var updateDepositDate = context.Deposits
                                       .SingleOrDefault<Deposit>(x => x.Cname == "ANIL");

                updateDepositDate.Adate = Convert.ToDateTime("01-SEP-1995");
                context.SaveChanges();

                // Delete Data in DB
                var deleteCust = context.Customers
                                       .SingleOrDefault<Customer>(x => x.Cname == "Reena");

                context.Customers.Remove(deleteCust);
                context.SaveChanges();

                Console.WriteLine();

                // Include
                Console.WriteLine("Result:");
                var result = context.Borrows.Include(p => p.BnameNavigation);
                foreach (var item in result)
                {
                    Console.WriteLine($"{item.BnameNavigation.City} {item.Bname}");
                }

                Console.WriteLine();

                // Multiple Include 
                Console.WriteLine("Multiple Include Result:");
                var multipleInclude = context.Borrows
                                            .Include(p => p.BnameNavigation)
                                            .Include(p=>p.CnameNavigation);
                foreach (var item in multipleInclude)
                {
                    Console.WriteLine($"{item.BnameNavigation.City} {item.Bname} {item.CnameNavigation.City} {item.Cname}");
                }

                Console.WriteLine();
                Console.WriteLine("New Result:");
                var newResult = context.Borrows;
                foreach (var item in newResult)
                {
                    Console.WriteLine($"{item.BnameNavigation.City}");
                }

            }



        }
    }
}
