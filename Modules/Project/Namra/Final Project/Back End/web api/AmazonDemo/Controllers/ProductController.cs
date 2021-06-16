using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly AmazonContext context;
        IProduct product;
        IBrand brand;
        ICategory category;
        public ProductController(IBrand brand,ICategory category, AmazonContext context, IProduct product)
        {
            this.brand = brand;
            this.category = category;
            this.context = context;
            this.product = product;
        }

        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            return product.GetAll();
        }

        [HttpGet("{PName}")]
        public IEnumerable<Product> GetByName(string PName)
        {
            return product.Find(s => s.ProductName.ToLower().Contains(PName.ToLower()));
        }

        [HttpGet("{Id}")]
        public Product GetById(int Id)
        {
            return product.GetById(Id);
        }

        [HttpGet("{Price}")]
        public IEnumerable<Product> GetByPrice(int Price)
        {
            return product.Find(s => s.ProductPrice <= Price);
        }

        [HttpPost]
        public int Create([FromBody] Product newPrc)
        {
            if(product.Any(s=>s.ProductName == newPrc.ProductName) || !brand.Any(s=>s.BrandId == newPrc.BrandId) || !category.Any(s=>s.CategoryId==newPrc.CategoryId) || newPrc.ProductPrice < 1 || newPrc.Offer > 70 || newPrc.Offer < 0)
            {
                return 0;
            }
            else
            {
                newPrc.ProductDate = DateTime.Now;
                product.Create(newPrc);
                return context.Products.ToList().Last().ProductId;
            }
        }

        [HttpPut]
        public bool Update([FromBody] Product updatePrc)
        {
            if(product.Any(s=>s.ProductId == updatePrc.ProductId))
            {
                if(brand.Any(s=>s.BrandId==updatePrc.BrandId) || category.Any(s=>s.CategoryId==updatePrc.CategoryId))
                {
                    if(!product.Any(s=>s.ProductName == updatePrc.ProductName))
                    {
                        updatePrc.ProductDate = DateTime.Now;
                        product.Update(updatePrc);
                        return true;
                    }
                    else
                    {
                        if(updatePrc.ProductId == product.Find(s=>s.ProductName==updatePrc.ProductName).First().ProductId)
                        {
                            updatePrc.ProductDate = DateTime.Now;
                            product.Update(updatePrc);
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        [HttpDelete("{Id}")]
        public bool Delete(int Id)
        {
            if(product.Any(s=>s.ProductId == Id))
            {
                product.Delete(product.Find(s => s.ProductId == Id).First());
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
