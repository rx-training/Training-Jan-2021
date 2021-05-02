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
    public class RestorentController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IRestorent Customer;
        public RestorentController(IRestorent custo, Swiggy_ProjectContext _context)
        {
            this.Customer = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Restorent> AddCustomerMethod()
        {
            return Customer.GetAll();
        }


        [HttpPost]
        public string creates([FromBody] Restorent addCustomer)
        {
            Restorent checkDoctor = context.Restorents.FirstOrDefault(s => s.RestorentName == addCustomer.RestorentName);
            if (checkDoctor != null)
                //new Exception("Create is already exists...");
                return "Restorent is already exists...";
            else
            {
                Customer.Create(addCustomer);
                Restorent addedCustomer = context.Restorents.ToList().Last();
                return $"Doctor {addedCustomer.RestorentName} is added successfully and your id is {addedCustomer}";
            }
        }


        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var doctorDelete = context.Restorents.Single(s => s.RestorentId == id);
                Customer.Delete(doctorDelete);
                return "Restorent is remove successfully";
            }
            catch (Exception)
            {
                return $"Restorent is not found...";
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
