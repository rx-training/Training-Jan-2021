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
    public class PlacedProductDetailController : Controller
    {
        private readonly IPlacedProductDetail placedProductDetail;
        private readonly IProduct product;
        public PlacedProductDetailController(IPlacedProductDetail placed, IProduct product)
        {
            this.placedProductDetail = placed;
            this.product = product;
        }
        [HttpGet("UserId")]
        public IEnumerable<PlacedProductDetail> GetByUser(int UserId)
        {
            return placedProductDetail.Find(s => s.UserId == UserId);
        }

        [HttpGet("UserId")]
        public IEnumerable<Product> GetProductByUser(int UserId)
        {
            IEnumerable<PlacedProductDetail> placedProductDetails = placedProductDetail.Find(s => s.UserId == UserId);
            List<Product> products = new List<Product>();
            foreach (var item in placedProductDetails)
            {
                products.Add(product.Find(s => s.ProductName == item.ProductName).First());
            }
            return products;
        }
    }
}
