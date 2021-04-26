using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticeDBAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.ModelBinding;

namespace PracticeDBAPI.Repositories
{
    public class DepositorRepository : IDepositors
    {
        private readonly TestDBContext ctx;

        public DepositorRepository(TestDBContext context)
        {
            ctx = context;
        }

        private static DepositDTO ItemToDTO(Deposit depositItem) =>
        new DepositDTO
        {
            ActNo = depositItem.ActNo,
            Bname = depositItem.Bname,
            Cname = depositItem.Cname
        };

        public List<DepositDTO> GetAll()
        {
            var cust = ctx.Deposits
                        .Select(x => ItemToDTO(x))
                        .ToList();

            return cust;
        }

        IEnumerable IDepositors.GetAllCustomers(bool includeCustomer)
        {
            IEnumerable cust = ctx.Deposits
                            .Include("CnameNavigation")
                            .Select(s => new
                            {
                                ActNo = s.ActNo,
                                Date = s.Adate,
                                Amount = s.Amount,
                                Customer = s.CnameNavigation == null || includeCustomer == false ? null : new Customer()
                                {
                                    Cname = s.CnameNavigation.Cname,
                                    City = s.CnameNavigation.City
                                }
                            })
                            .ToList();

            return cust;
        }

        public void PostCustomer(Customer customer)
        {
            ctx.Customers.Add(new Customer()
            {
                Cname = customer.Cname,
                City = customer.City
            });

            ctx.SaveChanges();

            return;
        }

        public string PutCustomer(string customer, Customer newCustomer)
        {
            var existingCustomer = ctx.Customers.Where(s => s.Cname == customer)
                                                    .SingleOrDefault<Customer>();

            if (existingCustomer != null)
            {
                existingCustomer.City = newCustomer.City;

                ctx.SaveChanges();

                return "success";
            }
            else
            {
                return null;
            }
        }

        public void DeleteCustomer(string name)
        {
            var customer = ctx.Customers
                .Where(s => s.Cname == name)
                .SingleOrDefault();

            ctx.Customers.Remove(customer);
            ctx.SaveChanges();
        }

    }
}
