using Microsoft.AspNetCore.Mvc;
using Swiggy.Models;
using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        ICustomer Customer;
        public CustomerController(ICustomer custo, Swiggy_ProjectContext _context)
        {
            this.Customer = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Customer> AddCustomerMethod()
        {
            return Customer.GetAll();
        }
        

        [HttpPost]
        public string creates([FromBody] Customer addCustomer)
        {

            Customer checkDoctor = context.Customers.FirstOrDefault(s => s.CustomerName == addCustomer.CustomerName);
            if (checkDoctor != null)
                //new Exception("Create is already exists...");
                return "Customer is already exists...";
            else
            {
                Customer.Create(addCustomer);
                Customer addedCustomer = context.Customers.ToList().Last();
                return $"Doctor {addedCustomer.CustomerName} is added successfully and your id is {addedCustomer}";
            }
        }
        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomers(int id)
        {
            var customers = Customer.GetById(id);

            if (customers == null)
            {
                return NotFound();
            }
            return customers;
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var customer = Customer.GetById(id);
            if (customer == null)
            {
                return NotFound();
            }

            Customer.Delete(customer);

            return NoContent();
        }

        //Put

        [HttpPut("{id}")]
        public ActionResult<Customer> PutMovie(int id, Customer customer)
        {
            try
            {
                Customer.Update(customer);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetCustomers(id);

        }
    }
}
