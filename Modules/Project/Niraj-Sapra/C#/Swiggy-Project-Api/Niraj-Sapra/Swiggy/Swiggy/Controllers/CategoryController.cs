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
        public IEnumerable<Models.Category> GetAllCategoryMethod()
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
        //Get by ID
        [HttpGet("{id}")]
        public ActionResult<Category> GetCitys(int id)
        {
            var categorys = Category.GetById(id);

            if (categorys == null)
            {
                return NotFound();
            }
            return categorys;
        }
        //Delete
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(int id)
        {
            var categorys = Category.GetById(id);
            if (categorys == null)
            {
                return NotFound();
            }

            Category.Delete(categorys);

            return NoContent();
        }

        //Put
        [HttpPut("{id}")]
        public ActionResult<Category> PutMovie(int id, Category categorys)
        {
            try
            {
                Category.Update(categorys);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetCitys(id);
        }
    }
}
