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
        ISellerProduct sellerProduct;
        ISellerAddress sellerAddress;
        ISellerDeliverable sellerDeliverable;
        public SellerController(ISellerAddress sellerAddress, ISellerDeliverable sellerDeliverable,ISellerProduct sellerProduct,AmazonContext context, ISeller seller)
        {
            this.sellerAddress = sellerAddress;
            this.sellerDeliverable = sellerDeliverable;
            this.sellerProduct = sellerProduct;
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

        [HttpGet("{ProductId}")]
        public IEnumerable<Seller> GetByProduct(int ProductId)
        {
            IEnumerable<SellerProduct> sellerProducts = sellerProduct.Find(s => s.ProductId == ProductId);
            List<Seller> sellers = new List<Seller>();
            foreach (var item in sellerProducts)
            {
                sellers.Add(seller.Find(s => s.SellerId == item.SellerId).First());
            }
            return sellers;
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

        [HttpPut]
        public bool Update([FromBody] Seller USeller)
        {
            if(seller.Any(s=>s.SellerId == USeller.SellerId))
            {
                if(seller.Any(s=>s.SellerCompanyName == USeller.SellerCompanyName))
                {
                    if(seller.Find(s=>s.SellerCompanyName==USeller.SellerCompanyName).First().SellerId == USeller.SellerId)
                    {
                        seller.Update(USeller);
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    seller.Update(USeller);
                    return true;
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
            if(seller.Any(s=>s.SellerId == Id))
            {
                IEnumerable<SellerAddress> sla = this.sellerAddress.Find(s => s.SellerId == Id);
                IEnumerable<SellerDeliverable> sld = this.sellerDeliverable.Find(s => s.SellerId == Id);
                IEnumerable<SellerProduct> slp = this.sellerProduct.Find(s => s.SellerId == Id);

                foreach (var item in sla.ToList())
                {
                    sellerAddress.Delete(item);
                }
                foreach (var item in sld.ToList())
                {
                    sellerDeliverable.Delete(item);
                }
                foreach (var item in slp.ToList())
                {
                    sellerProduct.Delete(item);
                }
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
