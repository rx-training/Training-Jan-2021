using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using BATAWebApiProject.Authentication;

namespace BATAWebApiProject.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        IProduct product;

        public ProductsController(IProduct product)
        {
            this.product = product;
        }

        // GET: api/Products
        [HttpGet]
        public IEnumerable<Models.Product> GetProducts()
        {
            return product.GetAll();
        }

        // GET: api/Products/5
        //[HttpGet("{id}")]
        //public ActionResult<Product> GetProductById(int id)
        //{
        //    var product1 = product.GetById(id);

        //    if (product1 == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(product1);
        //}

        //// PUT: api/Products/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        //public ActionResult<Product> PutProduct(string id, Product products)
        //{
        //    if (id != products.ProductCode)
        //    {
        //        return BadRequest();
        //    }
        //    product.Update(id, products);
        //    return products;
        //}

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpGet("ViewMan")]
        public IEnumerable<ViewMan> GetDataView()
        {
            return product.GetDataView();
        }
        [HttpGet("ViewWoman")]

        public IEnumerable<ViewWoman> GetDataViewWoman()
        {
            return product.GetDataViewWoman();
        }
        [HttpGet("ViewKid")]
        public IEnumerable<ViewKid> GetDataViewKid()
        {
            return product.GetDataViewKid();
        }
        [HttpGet("ViewWoman999")]

        public IEnumerable<ViewWomen999> GetDataViewWomen999()
        {
            return product.GetDataViewWomen999();
        }
        [HttpGet("ViewMan999")]

        public IEnumerable<ViewMen999> GetDataViewMen999()
        {
            return product.GetDataViewMen999();
        }
        [HttpGet("ViewKid999")]

        public IEnumerable<ViewKids999> GetDataViewKid999()
        {
            return product.GetDataViewKid999();
        }
        [HttpPost]
        public ActionResult<Product> PostProduct(Product products)
        {
            product.Create(products);
            return products;
        }

        //// DELETE: api/Products/5
        //[HttpDelete("{id}")]
        //public void DeleteProduct(int id)
        //{
        //    var product1 = product.Find(i => i.ProductCode == id).Single();
        //    product.Delete(product1);
        //    return;
        //}

      

    }
}
