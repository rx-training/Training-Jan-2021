using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationAssignmentDay14.Models;
using WebApplicationAssignmentDay14.Models.IRepositories;

namespace WebApplicationAssignmentDay14.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        ICustomer customer;

        public CustomersController(ICustomer customer)
        {
            this.customer = customer;
        }

        [HttpGet]
        public IEnumerable<Customer> GetCustomers()
        {
            return customer.GetAll();
        }

        [HttpGet("{id}")]
        public Customer GetCustomer(int id)
        {
            return customer.GetById(id);
        }

        [HttpPost]
        public void PostCustomer([FromBody] Customer customers)
        {
            customer.Create(customers);
        }

        [HttpPut("{id}")]
        public void PutCustomer(int id, [FromBody] Customer customers)
        {
            customer.Update(id, customers);
        }

        [HttpDelete("{id}")]
        public void DeleteCustomer(int id)
        {
            customer.Delete(id);
        }
    }
}
