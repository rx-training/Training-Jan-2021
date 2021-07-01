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
        IProductDescription productDescription;
        IProductImage productImage;
        IBrand brand;
        ICategory category;
        public ProductController(IProductDescription productDescription, IProductImage productImage,IBrand brand, ICategory category, AmazonContext context, IProduct product)
        {
            this.productImage = productImage;
            this.productDescription = productDescription;
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

        [HttpGet("{SearchName}")]
        public IEnumerable<Product> SearchProduct(string SearchName)
        {

            if(SearchName == "All")
            {
                return product.GetAll();
            }

            List<Product> products = new List<Product>();

            IEnumerable<Product> pSearch = product.Find(s => s.ProductName.ToLower().Contains(SearchName.ToLower()));

            foreach (var item in pSearch)
            {
                if(!products.Contains(item))
                {
                    products.Add(item);
                }
            }

            IEnumerable<Brand> brands = brand.Find(s => s.BrandName.ToLower().Contains(SearchName.ToLower()));

            foreach (var item in brands)
            {
                IEnumerable<Product> prc = product.Find(s => s.BrandId == item.BrandId);
                foreach (var p in prc)
                {
                    if (!products.Any(s=>s.ProductId == p.ProductId))
                    {
                        products.Add(p);
                    }
                }
            }

            IEnumerable<Category> categories = category.Find(s => s.CategoryName.ToLower().Contains(SearchName.ToLower()));
            foreach (var item in categories)
            {
                IEnumerable<Product> prc = product.Find(s => s.CategoryId == item.CategoryId);
                foreach (var it in prc)
                {
                    if (!products.Any(s => s.ProductId == it.ProductId))
                    {
                        products.Add(it);
                    }
                }
            }
            return products;
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
        [HttpGet]
        public IEnumerable<string> SearchTags()
        {
            IEnumerable<Product> products = product.GetAll();
            IEnumerable<Brand> brands = brand.GetAll();
            IEnumerable<Category> categories = category.GetAll();
            List<string> search = new List<string>();
            foreach (var item in categories)
            {
                if(!search.Contains(item.CategoryName) && item.CategoryName.ToLower() != "dummy")
                {
                    search.Add(item.CategoryName);
                }
            }
            foreach (var item in brands)
            {
                if(!search.Contains(item.BrandName) && item.BrandName.ToLower() != "dummy")
                {
                    search.Add(item.BrandName);
                }
            }
            foreach (var item in products)
            {
                if(!search.Contains(item.ProductName))
                {
                    search.Add(item.ProductName);
                }
            }
            return search;
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
                IEnumerable<ProductImage> images = productImage.Find(s => s.ProductId == Id);
                IEnumerable<ProductDescription> description = productDescription.Find(s => s.ProductId == Id);
                foreach (var item in images.ToList())
                {
                    productImage.Delete(item);
                }
                foreach (var item in description.ToList())
                {
                    productDescription.Delete(item);
                }
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
