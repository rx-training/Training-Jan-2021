using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;

namespace AmazonDemo.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SellerController : Controller
    {
        private readonly AmazonContext context;
        ISeller seller;
        public SellerController(AmazonContext context, ISeller seller)
        {
            this.context = context;
            this.seller = seller;
        }
        [HttpGet]
        public IEnumerable<Seller> GetAll()
        {
            return seller.GetAll();
        }

        [HttpGet("{SellerId}")]
        public Seller GetById(int SellerId)
        {
            return seller.GetById(SellerId);
        }

        [HttpGet("{SellerName}")]
        public IEnumerable<Seller> GetBySellerName(string SellerName)
        {
            return seller.Find(s => s.SellerName.ToLower().Contains(SellerName.ToLower()));
        }

        [HttpGet("{CompanyName}")]
        public IEnumerable<Seller> GetByCompanyName(string CompanyName)
        {
            return seller.Find(s => s.SellerCompanyName.ToLower().Contains(CompanyName.ToLower()));
        }

        [HttpPost]
        public int Create([FromBody]Seller newSeller)
        {
            if (seller.Any(s => s.SellerCompanyName == newSeller.SellerCompanyName && s.SellerName == newSeller.SellerName) ||
                seller.Any(s => s.SellerContactNo == newSeller.SellerContactNo || s.SellerEmail == newSeller.SellerEmail))
            {
                return 0;
            }
            else
            {
                seller.Create(newSeller);
                return context.Sellers.ToList().Last().SellerId;
            }
        }

          [HttpDelete("{Id}")]
          public bool Delete(int Id)
          {
            if(seller.Any(s=>s.SellerId == Id))
            {
                seller.Delete(seller.GetById(Id));
                return true;
            }
            else
            {
                return false;
            }
          }

    }
}
