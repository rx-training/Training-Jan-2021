using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using BATAWebApiProject.Authentication;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        IBrand brand;
        public BrandsController(IBrand brand)
        {
            this.brand = brand;
        }
        //private readonly BATAContext _context;

        //public BrandsController(BATAContext context)
        //{
        //    _context = context;
        //}

        // GET: api/Brands
        [HttpGet]
        public IEnumerable<Models.Brand> GetBrands()
        {
            return brand.GetAll();
        }


        // GET: api/Brands/5

        [HttpGet("{id}")]
        public ActionResult<Brand> GetBrandById(int id)
        {
            var brand1 = brand.GetById(id);

            if (brand1 == null)
            {
                return NotFound();
            }

            return Ok(brand1);
        }

        //// PUT: api/Brands/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Brand> PutBrand(int id, Brand brands)
        {
            if (id != brands.BrandId)
            {
                return BadRequest();
            }
            brand.Update(id, brands);
            return brands;
        }

        // POST: api/Brands
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<Brand> PostBrand(Brand brands)
        {
            brand.Create(brands);
            return brands;
        }

        //// DELETE: api/Brands/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteBrand(int id)
        {
            var brand1 = brand.Find(i => i.BrandId == id).Single();
            brand.Delete(brand1);
            return;
        }
    }
}
