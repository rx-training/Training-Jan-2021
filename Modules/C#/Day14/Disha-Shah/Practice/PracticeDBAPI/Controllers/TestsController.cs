using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracticeDBAPI.Models;
using PracticeDBAPI.Repositories;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeDBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        private IDepositors depositors;

        public TestsController(IDepositors repo)
        {
            depositors = repo;
        }

        [HttpGet]
        public ActionResult<List<DepositDTO>> GetAllDepositors()
        {
            var allDepositors = depositors.GetAll();

            if (allDepositors.Count == 0)
            {
                return NotFound();
            }
            
            // custom header
            Response.Headers.Add("depositors-total-count", allDepositors.Count.ToString());

            return Ok(allDepositors);
        }

        [HttpGet("{includeCustomer}")]
        public ActionResult GetAllDepositors(bool includeCustomer = false)
        {
            IEnumerable cust = depositors.GetAllCustomers(includeCustomer);

            return Ok(cust);
        }

        [HttpPost]
        public ActionResult PostNewCustomer(Customer customer)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            depositors.PostCustomer(customer);
            return Ok();
        }

        [HttpPut]
        public ActionResult Put(string customer, Customer newCustomer)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            string result = depositors.PutCustomer(customer, newCustomer);
            if (result == null)
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

            depositors.DeleteCustomer(name);
            return Ok();
        }
    }
}
