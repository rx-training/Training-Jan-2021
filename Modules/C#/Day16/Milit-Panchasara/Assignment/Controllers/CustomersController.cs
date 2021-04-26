using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment.Models;
using Assignment.Code.Interfaces;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerRepository customer;

        public CustomersController(ICustomerRepository customer)
        {
            this.customer = customer;
        }

        // GET: api/Customers
        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GetCustomers()
        {
            return customer.Index().ToList();
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomer(int id)
        {
            var c = customer.Find(x => x.Id == id).FirstOrDefault();

            if (c == null)
            {
                return NotFound();
            }

            return c;
        }

        // PUT: api/Customers/5
        [HttpPut("{id}")]
        public ActionResult<Customer> PutCustomer(int id, Customer request)
        {
            try
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                var updatedCustomer = customer.Update(request);
                return updatedCustomer;
            }
            catch (Exception e)
            {
                throw;
            }

        }

        // POST: api/Customers
        [HttpPost]
        public ActionResult<Customer> Add(Customer request)
        {
            return customer.Add(request);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public ActionResult<Customer> DeleteCustomer(int id)
        {
            try
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                var c = customer.Find(x => x.Id == id).FirstOrDefault();
                var deletedCustomer = customer.Delete(c);
                return deletedCustomer;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        private bool CustomerExists(int id)
        {
            return customer.IsExist(x => x.Id == id);
        }
    }
}
