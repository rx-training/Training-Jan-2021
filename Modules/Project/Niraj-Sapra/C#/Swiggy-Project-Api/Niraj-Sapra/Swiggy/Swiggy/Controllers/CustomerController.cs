using Microsoft.AspNetCore.Authorization;
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


        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var doctorDelete = context.Customers.Single(s => s.CustomerId == id);
                Customer.Delete(doctorDelete);
                return "Customer is remove successfully";
            }
            catch (Exception)
            {
                return $"Customer is not found...";
            }
        }

       /* // PUT api/<CustomerController>/5
        [HttpPut("{phoneno}")]
        public string Updates(string phoneno, [FromBody] Customer custom)
        {
         *//*   public Person Put(int id, [FromBody] Person person)
        {*//*
            
            var oldPerson = context.Customers.Single(N => N.CustomerPhoneno == phoneno);
            oldPerson = person;
            return oldPerson;
        }*/

    }
}
