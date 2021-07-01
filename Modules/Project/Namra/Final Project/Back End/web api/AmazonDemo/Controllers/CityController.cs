using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Authenticate;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly AmazonContext context;
        ICity city;
        IState state;
        public CityController(AmazonContext _context, ICity _city, IState _state)
        {
            this.context = _context;
            this.city = _city;
            this.state = _state;
        }

        //To get all cities
        [HttpGet]
        public IEnumerable<City> GetAll()
        {
            return city.GetAll();
        }
        [HttpGet("{CityName}")]
        public IEnumerable<City> GetByCityName(string CityName)
        {
            return city.Find(s => s.CityName.ToLower().Contains(CityName.ToLower()));
        }
        [HttpGet("{CityName}")]
        public int GetIdByCityName(string CityName)
        {
            return city.Find(s => s.CityName.ToLower().Contains(CityName.ToLower())).First().CityId;
        }
        //To get city data by id
        [HttpGet("{Id}")]
        public City GetById(int Id)
        {
            return city.GetById(Id);
        }

        [HttpGet("{StateId}")]
        public IEnumerable<City> GetByStateId(int StateId)
        {
            return city.Find(s => s.StateId == StateId);
        }

        //To check whether cityname exist or not
        [HttpGet("{CityName}")]
        public bool AnyCity(string CityName)
        {
            return city.Any(s => s.CityName == CityName);
        }

        // To check whether any city exist or not
        [HttpGet]
        public bool Any()
        {
            return city.Any();
        }

        //To insert city data
        [HttpPost]
        public string Create([FromBody] City AddCity)
        {
            if(!city.Any(s => s.CityName == AddCity.CityName))
            {
                if(state.Any(s=>s.StateId == AddCity.StateId))
                {
                    city.Create(AddCity);
                    City addedCity = context.Cities.ToList().Last();
                    return $"New City {addedCity.CityName} is added in state {addedCity.StateId} with city id {addedCity.CityId}";
                }
                else
                {
                    return $"Wrong State Id {AddCity.StateId} is entered...";
                }
            }
            else
            {
                return $"There is already city named {AddCity.CityName}...";
            }
        }

        [HttpPut]
        public string UpdateCity([FromBody] Models.City updateCity)
        {
            if(city.Any(s=> s.CityId == updateCity.CityId))
            {
                if(city.Any(s=> s.CityName == updateCity.CityName && s.StateId == updateCity.StateId))
                {
                    return "You can't choose this city name as is already same city with same staet id...";
                }
                else
                {
                    if(state.Any(s=> s.StateId == updateCity.StateId))
                    {
                        city.Update(updateCity);
                        return $"New city name {updateCity.CityName} with Stete id {updateCity.StateId} is applied for city id {updateCity.CityId}";
                    }
                    else
                    {
                        return "please choose an appropriate state id...";
                    }
                }
            }
            else
            {
                return $"City id {updateCity.CityId} is not found...";
            }
        }
    }
}
