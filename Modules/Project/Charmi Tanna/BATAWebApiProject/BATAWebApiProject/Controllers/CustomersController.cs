using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using BATAWebApiProject.Authentication;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly BATAContext _context;

        //private readonly BATAContext _context;

        //public CustomersController(BATAContext context)
        //{
        //    _context = context;
        //}
        ICustomer customer;
        public CustomersController(ICustomer customer)
        {
            this.customer = customer;
        }
        // GET: api/Customers
        [HttpGet]
        [Route("AllCustomers")]
        public IEnumerable<Models.Customer> GetCustomer()
        {
            return customer.GetAll();
        }

        [HttpGet]
        [Route("AllCustomersById/{customerid}")]
        public ActionResult<Customer> GetCustomerById(int customerid)
        {
            var cust = customer.GetById(customerid);

            if (cust == null)
            {
                return NotFound();
            }

            return Ok(cust);
        }

        //// PUT: api/Customers/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        [Route("UpdateCustomerDetails/{customerid}")]
        public ActionResult<Customer> PutCustomer(int customerid, Customer customers)
        {
            if (customerid != customers.CustomerId)
            {
                return BadRequest();
            }
            customer.Update(customerid, customers);
            return customers;
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPost]
        [Route("InsertCustomerDetails")]
        public ActionResult<Customer> PostCustomer(Customer customers)
        {
            customer.Create(customers);
            return customers;
        }

        //// DELETE: api/Customers/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        [Route("DeleteCustomerDetails/{customerid}")]
        public void DeleteCustomer(int customerid)
        {
            var cust = customer.Find(i => i.CustomerId == customerid).Single();
            customer.Delete(cust);
            return;
        }

        //private bool CustomerExists(int id)
        //{
        //    return _context.Customers.Any(e => e.CustomerId == id);
        //}
    }
}
