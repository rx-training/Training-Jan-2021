using Microsoft.AspNetCore.Mvc;
using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        ICustomer customer;
        public CustomerController(ICustomer customer)
        {
            this.customer = customer;
        }

        [HttpGet]
        public IEnumerable<Models.Customer> GetCustomers()
        {
            return customer.GetAll();
        }

    }
}
