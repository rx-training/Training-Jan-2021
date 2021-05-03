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
    public class CategoryController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        ICategory Category;
        public CategoryController(ICategory custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Category> AddCustomerMethod()
        {
            return  Category.GetAll();
        }


        [HttpPost]
        public string creates([FromBody] Category addCustomer)
        {

            Category checkDoctor = context.Categories.FirstOrDefault(s => s.CategoryName == addCustomer.CategoryName);
            if (checkDoctor != null)
                //new Exception("Create is already exists...");
                return "Category is already exists...";
            else
            {
                Category.Create(addCustomer);
                Category addedCustomer = context.Categories.ToList().Last();
                return $"Category {addedCustomer.CategoryName} is added successfully and your id is {addedCustomer}";
            }
        }


        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var doctorDelete = context.Categories.Single(s => s.CategoryId == id);
                Category.Delete(doctorDelete);
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
