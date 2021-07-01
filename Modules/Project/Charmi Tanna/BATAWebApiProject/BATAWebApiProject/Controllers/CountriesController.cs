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
    public class CountriesController : ControllerBase
    {//private readonly BATAContext _context;

        //public CountriesController(BATAContext context)
        //{
        //    _context = context;
        //}
        ICountry country;
        public CountriesController(ICountry country)
        {
            this.country = country;
        }

        // GET: api/Countries
        [HttpGet]
        public IEnumerable<Models.Country> GetCountry()
        {
            return country.GetAll();
        }
        [HttpGet("{id}")]
        public ActionResult<Country> GetCountryById(int id)
        {
            var country1 = country.GetById(id);

            if (country1 == null)
            {
                return NotFound();
            }

            return Ok(country1);
        }

        //// PUT: api/Countries/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Country> PutCountry(int id, Country countries)
        {
            if (id != countries.CountryId)
            {
                return BadRequest();
            }
            country.Update(id, countries);
            return countries;
        }

        // POST: api/Countries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<Country> PostCountry(Country countries)
        {
            country.Create(countries);
            return countries;
        }

        //// DELETE: api/Countries/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteCountry(int id)
        {
            var country1 = country.Find(i => i.CountryId == id).Single();
            country.Delete(country1);
            return;
        }
    }
}
