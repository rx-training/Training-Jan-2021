using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Authorization;
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
    public class CitiesController : ControllerBase
    {
        private readonly ICity cities;

        public CitiesController(ICity context)
        {
            cities = context;
        }

        // GET: api/BookMyShow/Cities
        [HttpGet]
        public ActionResult<IEnumerable<City>> GetCities()
        {
            return Ok(cities.GetAll());
        }

        // GET: api/BookMyShow/Cities/5
        [HttpGet("{id}")]
        public ActionResult<City> GetCity(int id)
        {
            var city = cities.GetById(id);

            if (city == null)
            {
                return NotFound();
            }

            return Ok(city);
        }

        // GET: api/BookMyShow/Cities/5/Theatres
        [HttpGet("{id}/Theatres")]
        public ActionResult<IEnumerable<Theatre>> GetTheatres(int id)
        {
            var theatre = cities.GetTheatresById(id);

            if (theatre == null)
            {
                return NotFound();
            }

            return Ok(theatre);
        }

        // GET: api/BookMyShow/Cities/5/EventVenues
        [HttpGet("{id}/EventVenues")]
        public ActionResult<IEnumerable<EventVenue>> GetEventVenues(int id)
        {
            var eventVenue = cities.GetEventVenuesById(id);

            if (eventVenue == null)
            {
                return NotFound();
            }

            return Ok(eventVenue);
        }

        // PUT: api/BookMyShow/Cities/5  
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutCity(int id, City city)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            cities.Update(id, city);

            return Ok();
        }

        // POST: api/BookMyShow/Cities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<City> PostCity(City city)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            cities.Create(city);

            return Ok();
        }

        // DELETE: api/BookMyShow/Cities
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteCity(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            cities.Delete(id);

            return Ok();
        }
    }
}
