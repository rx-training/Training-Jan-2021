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
    public class ViewProductController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IViewProduct Category;
        public ViewProductController(IViewProduct custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.ViewProduct> AddNewDataMethod()
        {
            return Category.GetAll();
        }

/*
        [HttpPost]
        public string creates([FromBody] ViewProduct obEntity)
        {

            ViewProduct check = context.ViewProducts.FirstOrDefault(s => s.RestorentName == obEntity.RestorentName);
            if (check != null)
                //new Exception("Create is already exists...");
                return "Customer is already exists...";
            else
            {
                Category.Create(obEntity);
                Category ObjEntity = context.Categories.ToList().Last();
                return $"Category {ObjEntity.CategoryName} is added successfully and your id is {ObjEntity}";
            }
        }*/


        // DELETE: api/Cosutomer/5
      /*  [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var dataDelete = context.ViewProducts.Single(s => s. == id);
                Category.Delete(dataDelete);
                return "Category is remove successfully";
            }
            catch (Exception)
            {
                return $"Category is not found...";
            }
        }
*/    }
}
