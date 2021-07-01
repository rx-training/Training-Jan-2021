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
    public class CartController : Controller
    {
        private readonly ICart cart;
        private readonly IProduct product;
        public CartController(ICart cart, IProduct product)
        {
            this.cart = cart;
            this.product = product;
        }

        [HttpGet]
        public IEnumerable<Cart> GetAll()
        {
            return cart.GetAll();
        }

        [HttpGet("{UserId}")]
        public IEnumerable<Cart> GetByUser(int UserId)
        {
            return cart.Find(s => s.UserId == UserId);
        }

        [HttpGet("{UserId}")]
        public IEnumerable<Product> GetProductByUser(int UserId)
        {
            IEnumerable<Cart> carts = cart.Find(s => s.UserId == UserId);
            List<Product> products = new List<Product>();
            foreach (var item in carts)
            {
                products.Add(product.Find(s => s.ProductId == item.ProductId).First());
            }
            return products;
        }
        [HttpPost]
        public bool Create([FromBody] Cart cartAdd)
        {
            if (cart.Any(s => s.UserId == cartAdd.UserId && s.ProductId == cartAdd.ProductId))
            {
                return false;
            }
            else
            {
                cart.Create(cartAdd);
                return true;
            }
        }

        [HttpDelete("{UserId}/{ProductId}")]
        public bool Delete(int ProductId, int UserId)
        {
            if(cart.Any(s => s.ProductId == ProductId && s.UserId == UserId))
            {

                Cart ct = cart.Find(s => s.ProductId == ProductId && s.UserId == UserId).First();
                cart.Delete(ct);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
