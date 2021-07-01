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
    public class BrandController : Controller
    {
        private readonly IBrand brand;
        private readonly AmazonContext context;
        public BrandController( IBrand brand, AmazonContext context)
        {
            this.brand = brand;
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Brand> GetAll()
        {
            return brand.GetAll();
        }

        [HttpGet("{BrandName}")]
        public IEnumerable<Brand> GetByName(string BrandName)
        {
            return brand.Find(s => s.BrandName.ToLower().Contains(BrandName.ToLower())) ;
        }

        [HttpGet("{BrandId}")]
        public Brand GetById(int BrandId)
        {
            return brand.GetById(BrandId);
        }

        [HttpPost]
        public int Create([FromBody] Brand newBrand)
        {
            if(brand.Any(s=>s.BrandName == newBrand.BrandName))
            {
                return 0;
            }
            else
            {
                brand.Create(newBrand);
                return context.Brands.ToList().Last().BrandId;
            }
        }
        [HttpPut]
        public bool Update([FromBody] Brand updateBrand)
        {
            if(brand.Any(S=>S.BrandName == updateBrand.BrandName))
            {
                if(updateBrand.BrandId == brand.Find(s=>s.BrandName==updateBrand.BrandName).First().BrandId)
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
                brand.Update(updateBrand);
                return true;
            }
        }

        [HttpDelete("{BrandId}")]
        public bool Delete(int BrandId)
        {
            if(brand.Any(s=>s.BrandId == BrandId))
            {
                brand.Delete(brand.Find(s => s.BrandId == BrandId).First());
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
