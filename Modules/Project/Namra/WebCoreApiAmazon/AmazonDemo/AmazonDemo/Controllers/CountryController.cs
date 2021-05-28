using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly AmazonContext context;
        IState state;
        ICountry country;
        public CountryController( AmazonContext context, IState state, ICountry country)
        {
            this.context = context;
            this.state = state;
            this.country = country;
        }

        [HttpPost]
        public string Create([FromBody] Country ctr)
        {
            if (!country.Any(s => s.CountryName == ctr.CountryName))
            {
                country.Create(ctr);
                int id = context.Countries.ToList().Last().CountryId;
                return $"Country is added and country id is {id}";
            }
            else
                return $"There is already a country with same name...";
        }


        [HttpGet]
        public IEnumerable<Country> GetAll()
        {
            return country.GetAll();
        }

        [HttpGet("{id}")]
        public Country GetById(int id)
        {
            return country.GetById(id);
        }

        [HttpGet]
        public bool Any()
        {
            return country.Any();
        }

        [HttpGet("{CountryName}")]
        public bool Any(string CountryName)
        {
            return country.Any(s => s.CountryName == CountryName);
        }

        [HttpDelete("{CountryId}")]
        public string Delete(int CountryId)
        {
            if(country.GetById(CountryId).CountryName == "Dummy")
            {
                return $"You can't delete dummy country...";
            }
            else if (country.Any(s => s.CountryId == CountryId))
            {
                Country dummy = context.Countries.Where(s=> s.CountryName == "Dummy").First();
                IEnumerable<State> states = context.States.Where(s => s.CountryId == CountryId);
                foreach (var item in states)
                {
                    item.CountryId = dummy.CountryId;
                }
                context.SaveChanges();
                country.Delete(country.GetById(CountryId));
                return $"Country with {CountryId} is deleted successfully...";
            }
            else
                return $"Please enter a valid country id...";
        }

        [HttpPut]
        public string Update([FromBody] Country ctr)
        {
            if (country.Any(s => s.CountryId == ctr.CountryId))
            {
                if (country.Any(s => s.CountryName == ctr.CountryName))
                {
                    country.Update(ctr);
                    return $"Country name is updated and new name is {ctr.CountryName}...";
                }
                else
                    return $"please enter a valid country name, the name which you want is already there.So, either you delete this country or give another unique name...";
            }
            else
                return $"Please enter a valid country id ...";
        }
    }
}
