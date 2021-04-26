using Microsoft.AspNetCore.Mvc;
using Practice.Models;
using Practice.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Practice.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerRepository customerRepository;
        public CustomersController(ICustomerRepository customerRepository)
        {
            this.customerRepository = customerRepository;
        }
        [HttpGet]
        public ActionResult<Response> Index()
        {
            var customers = customerRepository.Index();
            
            var res = new Response();
            res.Code = 1;
            res.Data = customers;
            res.Message = "Success";
            return res;
        }

        // GET: api/customers/show/1
        [HttpGet("{id}")]
        public ActionResult<Response> Show(int id, [FromHeader] string token)
        {
            //var header = new HttpRequestHeaders();
            var header = this.Request.Headers;

            var context = new ToyCompanyContext();
            var customer = context.Customers.SingleOrDefault(x => x.Id == id);

            var res = new Response();
            if (customer == null)
            {
                res.Code = 0;
                res.Data = customer;
                res.Message = "No customer found.";
                return res;
            }

            var data = new CustomerDTO();
            data.FirstName = customer.FirstName;
            data.LastName = customer.LastName;
            data.Email = customer.Email;
            data.ContactNumber = customer.ContactNumber;

            res.Code = 1;
            res.Data = customer;
            res.Message = "Success";
            return res;
        }

        // PUT: api/customers/ChangeAddress/1
        [HttpPut("{id}")]
        public ActionResult<Response> ChangeCustomer(int id, Customer customer)
        {
            var context = new ToyCompanyContext();
            var res = new Response();
            var cust = context.Customers.SingleOrDefault(x => x.Id == id);
            if (cust == null)
            {
                return res;
            }
            else
            {
                //cust = customer;
                context.SaveChanges();
            }
           

            return res;
        }

        // PUT: api/customers/ChangeAddress/1
        [HttpPut("{id}")]
        public ActionResult<Response> ChangeAddress(int id, CustomerAddress customerAddress)
        {
            var context = new ToyCompanyContext();

            var res = new Response();

            res.Code = 1;
            res.Data = 1;
            res.Message = "Success";
            return res;
        }

        // DELETE: api/customers/deleteAddress/1
        [HttpDelete("{id}")]
        public ActionResult<Response> deleteAddress(int id)
        {
            var context = new ToyCompanyContext();

            var res = new Response();

            res.Code = 1;
            res.Data = 1;
            res.Message = "Success";
            return res;
        }


    }
}
