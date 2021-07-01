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
    public class SellerProductController : Controller
    {
        ISellerProduct sellerProduct;
        private readonly AmazonContext context;
        ISeller seller;
        IProduct product;
        public SellerProductController(IProduct product,AmazonContext context, ISellerProduct seller, ISeller sel)
        {
            this.product = product;
            this.context = context;
            this.sellerProduct = seller;
            this.seller = sel;
        }

        [HttpGet]
        public IEnumerable<SellerProduct> GetAll()
        {
            return sellerProduct.GetAll();
        }

        [HttpGet("{productId}")]
        public IEnumerable<Seller> GetSellerByProduct(int productId)
        {
            IEnumerable<SellerProduct> prc = sellerProduct.Find(s => s.ProductId == productId);
            List<Seller> sellers = new List<Seller>();
            foreach (var item in prc)
            {
                sellers.Add(seller.Find(s => s.SellerId == item.SellerId).First());
            }
            return sellers;
        }

        [HttpGet("{SellerId}")]
        public IEnumerable<Product> GetProductsBySellerId(int SellerId)
        {
            IEnumerable<SellerProduct> prc = sellerProduct.Find(s => s.SellerId == SellerId);
            List<Product> products = new List<Product>();
            foreach (var item in prc)
            {
                products.Add(product.Find(s => s.ProductId == item.ProductId).First());
            }
            return products;
        }

        [HttpGet("{SellerId}")]
        public IEnumerable<SellerProduct> GetSellerProductBySellerId(int SellerId)
        {
            return this.sellerProduct.Find(s => s.SellerId == SellerId);
        }

        [HttpPost]
        public bool Create ([FromBody] SellerProduct  sp)
        {
            if(!sellerProduct.Any(s=>s.ProductId == sp.ProductId  && s.SellerId == sp.SellerId))
            {
                sellerProduct.Create(sp);
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            if(sellerProduct.Any(s=>s.SellerProductId == id))
            {
                sellerProduct.Delete(sellerProduct.Find(s=>s.SellerProductId == id).First());
                return true;
            }
            else
            {
                return false;
            }
        }


    }
}
