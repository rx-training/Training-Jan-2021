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
    public class SellerDeliverableController : Controller
    {
        ISellerDeliverable sellerDeliverable;
        ICity city;
        public SellerDeliverableController(ISellerDeliverable sellerDeliverable, ICity city)
        {
            this.city = city;
            this.sellerDeliverable = sellerDeliverable;
        }

        [HttpGet("{SellerId}")]
        public IEnumerable<City> GetCitiesBySeller(int SellerId)
        {
            List<City> cities = new List<City>();
            IEnumerable<SellerDeliverable> sld = sellerDeliverable.Find(s => s.SellerId == SellerId);
            foreach (var item in sld)
            {
                cities.Add(city.Find(s => s.CityId == item.CityId).First());
            }
            return cities;
        }

        [HttpPost]
        public bool Create([FromBody] SellerDeliverable sd)
        {
            if(!sellerDeliverable.Any(s=>s.CityId == sd.CityId && s.SellerId == sd.SellerId))
            {
                sellerDeliverable.Create(sd);
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpDelete("{Id}")]
        public bool Delete(int Id)
        {
            if(sellerDeliverable.Any(s=>s.SellerDeliverableId == Id))
            {
                sellerDeliverable.Delete(sellerDeliverable.Find(s => s.SellerDeliverableId == Id).First());
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
