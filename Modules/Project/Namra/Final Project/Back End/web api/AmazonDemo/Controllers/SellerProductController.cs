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
        public SellerProductController(AmazonContext context, ISellerProduct seller, ISeller sel)
        {
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
    }
}
