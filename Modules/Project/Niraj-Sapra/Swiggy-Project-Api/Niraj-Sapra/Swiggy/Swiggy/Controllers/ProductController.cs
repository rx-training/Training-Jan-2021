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
    public class ProductController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IProduct Category;
        public ProductController(IProduct custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Product> AddNewDataMethod()
        {
            return Category.GetAll();
        }


        [HttpPost]
        public string creates([FromBody] Product obEntity)
        {

            Product check = context.Products.FirstOrDefault(s => s.ProductName == obEntity.ProductName);
            if (check != null)
                //new Exception("Create is already exists...");
                return "Product is already exists...";
            else
            {
                Category.Create(obEntity);
                Product ObjEntity = context.Products.ToList().Last();
                return $"Product {ObjEntity.ProductName} is added successfully and your id is {ObjEntity}";
            }
        }


        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var dataDelete = context.Products.Single(s => s.ProductId == id);
                Category.Delete(dataDelete);
                return "Product is remove successfully";
            }
            catch (Exception)
            {
                return $"Product is not found...";
            }
        }
    }
}
