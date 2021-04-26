using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomer customer;

        public CustomersController(ICustomer context)
        {
            customer = context;
        }

        // GET: api/Customers
        [HttpGet]
        public ActionResult<List<Customer>> GetCustomers()
        {
            //return await customer.Customers.ToListAsync();
            return Ok(customer.GetAll());
        }

        // GET: api/Customers/Reena&Mehta
        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomer(int id)
        {
            var customerInfo = customer.GetById(id);

            if (customerInfo == null)
            {
                return NotFound();
            }

            return Ok(customerInfo);
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult Put(int id, Customer customerInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            customer.Update(id, customerInfo);

            return Ok();
        }

        
        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult Post(Customer customerInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            customer.Create(customerInfo);

            //return CreatedAtAction("GetCustomer", new { id = customerInfo.Id }, customer);
            return Ok();
        }

        // POST: api/Customers/1/ShipTo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/ShipTo")]
        public ActionResult Post(int id, ShipTo shipTo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            customer.CreateShipTo(id, shipTo);

            //return CreatedAtAction("GetCustomer", new { id = customerInfo.Id }, customer);
            return Ok();
        }


        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public ActionResult DeleteCustomer(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            customer.Delete(id);

            return Ok();
        }

        // DELETE: api/Customers/5/ShipTo/1
        [HttpDelete("{id}/ShipTo/{shipToid}")]
        public ActionResult DeleteShipTo(int id, int shipToid)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            customer.DeleteShipTo(id, shipToid);

            return Ok();
        }
    }
}
