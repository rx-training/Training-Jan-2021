using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomer customers;

        public CustomersController(ICustomer cust)
        {
            customers = cust;
        }

        [HttpGet]
        public ActionResult<List<Customer>> Get()
        {
            return Ok(customers.GetCustomers());
        }
    }
}
