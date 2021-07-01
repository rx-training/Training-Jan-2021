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
    public class ProductImageController : Controller
    {
        IProductImage productImage;
        public ProductImageController(IProductImage product)
        {
            this.productImage = product;
        }

        [HttpGet]
        public IEnumerable<ProductImage> GetAll()
        {
            return productImage.GetAll();
        }
        [HttpGet("{Id}")]
        public IEnumerable<ProductImage> GetById(int Id)
        {
            return this.productImage.Find(s=>s.ProductId == Id);
        }

        [HttpPost]
        public bool Create([FromBody]ProductImage pi)
        {
            if(productImage.Any(s=>s.ProductId == pi.ProductId && s.ImagePath == pi.ImagePath))
            {
                return false;
            }
            else
            {
                productImage.Create(pi);
                return true;
            }
        }
        [HttpDelete("{ImageId}")]
        public bool Delete(int ImageId)
        {
            if(productImage.Any(s=>s.ImageId ==ImageId))
            {
                productImage.Delete(productImage.Find(s => s.ImageId == ImageId).First());
                return true;
            }
            else
            {
                return false;
            }
        }

  

        [HttpDelete("{ProductId}")]
        public  bool DeleteByProduct(int ProductId)
        {
            if(productImage.Any(s=>s.ProductId == ProductId))
            {
                IEnumerable<ProductImage> images = productImage.Find(s => s.ProductId == ProductId);
                foreach (var item in images.ToList())
                {
                    productImage.Delete(item);
                }
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
