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
        IProduct Product;
        public ProductController(IProduct custo, Swiggy_ProjectContext _context)
        {
            this.Product = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Product> AddNewDataMethod()
        {
            return Product.GetAll();
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
                Product.Create(obEntity);
                Product ObjEntity = context.Products.ToList().Last();
                return $"Product {ObjEntity.ProductName} is added successfully and your id is {ObjEntity}";
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProducts(int id)
        {
            var product = Product.GetById(id);

            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var products = Product.GetById(id);
            if (products == null)
            {
                return NotFound();
            }

            Product.Delete(products);

            return NoContent();
        }

        //Put

        [HttpPut("{id}")]
        public ActionResult<Product> PutProduct(int id, Product product)
        {
            try
            {
                Product.Update(product);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetProducts(id);

        }
    }
}
