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
    public class SellerAddressController : Controller
    {
        ISellerAddress sellerAddress;
        ICity city;
        public SellerAddressController(ISellerAddress sellerAddress, ICity city)
        {
            this.city = city;
            this.sellerAddress = sellerAddress;
        }

        [HttpGet("{SellerId}")]
        public bool Any(int SellerId)
        {
            return this.sellerAddress.Any(s => s.SellerId == SellerId);
        }

        [HttpGet]
        public IEnumerable<SellerAddress> GetAll()
        {
            return this.sellerAddress.GetAll();
        }

        [HttpGet("{SellerId}")]
        public IEnumerable<SellerAddress> GetById(int SellerId)
        {
            return this.sellerAddress.Find(s => s.SellerId == SellerId);
        }

        [HttpPost]
        public bool Create([FromBody]SellerAddress sl)
        {
            if(!sellerAddress.Any(s=>s.SellerId == sl.SellerId && s.SellerCityId == sl.SellerCityId && s.SellerAddress1 == sl.SellerAddress1))
            {
                if (sellerAddress.Any(s => s.SellerId == sl.SellerId))
                {
                    if(city.Any(s=>s.CityId == sl.SellerCityId))
                    {
                        sellerAddress.Create(sl);
                        return true;
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
            else
            {
                return false;
            }
        }

        [HttpPut]
        public bool Update([FromBody] SellerAddress sl)
        {
            if(sellerAddress.Any(s=>s.SellerAddress1==sl.SellerAddress1 && s.SellerId == sl.SellerId && s.SellerCityId == sl.SellerCityId))
            {
                if(sellerAddress.Find(s => s.SellerAddress1 == sl.SellerAddress1 && s.SellerId == sl.SellerId && s.SellerCityId == sl.SellerCityId).First().SellerAddressId == sl.SellerAddressId)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                if(city.Any(s=>s.CityId == sl.SellerCityId))
                {
                    sellerAddress.Update(sl);
                    return true;
                }
                else
                {
                    return false;
                }
            }

        }

        [HttpDelete("{SellerAddressId}")]
        public bool Delete(int SellerAddressId)
        {
            if(sellerAddress.Any(s=>s.SellerAddressId == SellerAddressId))
            {
                sellerAddress.Delete(sellerAddress.Find(s => s.SellerAddressId == SellerAddressId).First());
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpDelete("{SellerId}")]
        public bool DeleteAll(int SellerId)
        {
            IEnumerable<SellerAddress> sla = sellerAddress.Find(s => s.SellerId == SellerId);
            foreach (var item in sla.ToList())
            {
                sellerAddress.Delete(item);
            }
            return true;
        }
    }
}
