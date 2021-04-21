using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticeDBAPI.Models;
using PracticeDBAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeDBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        //[HttpGet]
        //public ActionResult GetAllCustomers()
        //{
        //    //List<Customer> cust = null;

        //    var ctx = new TestDBContext();
            
        //    var cust = ctx.Customers
        //                .Select(s => new
        //                {
        //                    Name = s.Cname,
        //                    City = s.City
        //                }).ToList();
            

        //    if (cust.Count == 0)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(cust);
        //}

        //private IDepositors depositors = null;

        //public TestsController(IDepositors repo)
        //{
        //    depositors = repo;
        //}

        [HttpGet]
        public ActionResult<List<Deposit>> GetAllDepositors()
        {
            var ctx = new TestDBContext();

            var cust = ctx.Deposits
                            .Include("CnameNavigation")
                            .Select(s => new
                            {
                                ActNo = s.ActNo,
                                Date = s.Adate,
                                Amount = s.Amount,
                                Customer = s.CnameNavigation.Cname,
                                CustomerCity = s.CnameNavigation.City
                            })
                            .ToList();

            if (cust.Count == 0)
            {
                return NotFound();
            }

            // custom header
            Response.Headers.Add("depositors-total-count", cust.Count.ToString());

            return Ok(cust);

            //return depositors.GetAll();
        }


        [HttpGet("{includeCustomer}")]
        public ActionResult GetAllDepositors(bool includeCustomer = false)
        {
            var ctx = new TestDBContext();

            var cust = ctx.Deposits
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

            if (cust.Count == 0)
            {
                return NotFound();
            }

            return Ok(cust);
        }

        [HttpPost]
        public ActionResult PostNewCustomer(Customer customer)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            var ctx = new TestDBContext();

                ctx.Customers.Add(new Customer()
                {
                    Cname = customer.Cname,
                    City=customer.City
                });

                ctx.SaveChanges();
            

            return Ok();
        }

        [HttpPut]
        public ActionResult Put(string customer, Customer newCustomer)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            var ctx = new TestDBContext();
                var existingCustomer = ctx.Customers.Where(s => s.Cname == customer)
                                                        .SingleOrDefault<Customer>();

                if (existingCustomer != null)
                {
                    existingCustomer.City = newCustomer.City;

                    ctx.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

            return Ok();
        }

        [HttpDelete]
        public ActionResult Delete(string name)
        {
            if (name == "")
                return BadRequest("Not a valid customer name");

            var ctx = new TestDBContext();
            
                var customer = ctx.Customers
                    .Where(s => s.Cname == name)
                    .SingleOrDefault();

            ctx.Customers.Remove(customer);
            ctx.SaveChanges();
            

            return Ok();
        }
    }
}
