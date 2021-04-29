using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Controllers
{
    [Route("api/BookMyShow/[controller]")]
    [ApiController]
    public class RegionsController : ControllerBase
    {
        private readonly IRegion regions;

        public RegionsController(IRegion context)
        {
            regions = context;
        }

        // GET: api/BookMyShow/Regions
        [HttpGet]
        public ActionResult<IEnumerable<Region>> GetRegions()
        {
            return Ok(regions.GetAll());
        }

        // GET: api/BookMyShow/Regions/5
        [HttpGet("{id}")]
        public ActionResult<Region> GetRegion(int id)
        {
            var region = regions.GetById(id);

            if (region == null)
            {
                return NotFound();
            }

            return Ok(region);
        }

        // Get: api/BookMyShow/Regions/5/Cities
        [HttpGet("{id}/Cities")]
        public ActionResult<IEnumerable<City>> GetRegionCities(int id)
        {
            var cities = regions.GetCitiesById(id);

            if (cities == null)
            {
                return NotFound();
            }

            return Ok(cities);
        }

    }
}
