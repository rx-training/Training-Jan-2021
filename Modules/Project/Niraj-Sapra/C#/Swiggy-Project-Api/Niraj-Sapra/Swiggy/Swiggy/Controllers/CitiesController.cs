using Microsoft.AspNetCore.Mvc;
using Swiggy.Models;
using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly Swiggy_ProjectContext _context;
        ICity City;
        public CitiesController(ICity citys, Swiggy_ProjectContext _context)
        {
            this.City = citys;
            this._context = _context;
        }

        [HttpGet]
        public IEnumerable<City> AllCityMethod()
        {
            return City.GetAll();
        }
        //[HttpGet("{​id}​")]
        [HttpGet("{id}")]
        public ActionResult<City> GetCitys(int id)
        {
            var city = City.GetById(id);

            if (city == null)
            {
                return NotFound();
            }
            else
            {
                return city;
            }
        }

        [HttpPost]
        public string creates([FromBody] City addCity)
        {
            City checkcity = _context.Cities.FirstOrDefault(s => s.CityName == addCity.CityName);
            if (checkcity != null)
            {
                return "Category is already exists...";
            }
            else
            {
                City.Create(addCity);
                City addedCity = _context.Cities.ToList().Last();
                return $"City {addedCity.CityName} is added successfully and your id is {addedCity.CityId}";
            }
        }
        //Delete
        [HttpDelete("{id}")]
        public IActionResult DeleteCity(int id)
        {
            var cityes = City.GetById(id);
            if (cityes == null)
            {
                return NotFound();
            }

            City.Delete(cityes);

            return NoContent();
        }

        //Put

        [HttpPut("{id}")]
        public ActionResult<City> PutCity(int id, City city)
        {
            try
            {
                City.Update(city);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetCitys(id);

        }
    }
}