using Assignment.IRepository;
using Assignment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        protected readonly ICustomer customer;
        public CustomerController(ICustomer ctx)
        {
            customer = ctx;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Customer>> Get()
        {
            try
            {
                return Ok(customer.GetAllCustomer());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<List<Customer>> Get(int id)
        {
            try
            {
                return Ok(customer.GetCustomerById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public void Post(Customer cust)
        {
            
                customer.InsertCustomer(cust);
            
            
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, Customer c)
        {

            try
            {

                customer.UpdateCustomer(id, c);
                return Ok("Data is updeted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }


        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                customer.DeleteCustomer(id);
                return Ok("SuccessFully Deleted Data");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
 
        
    }
}
