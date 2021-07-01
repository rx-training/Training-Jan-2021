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
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly AmazonContext context;
        ICity city;
        IState state;
        ICountry country;

        public StateController(AmazonContext _context, ICity _city, IState _state, ICountry _country)
        {
            this.context = _context;
            this.city = _city;
            this.state = _state;
            this.country = _country;
        }

        // To get all states
        [HttpGet]
        public IEnumerable<State> GetAll()
        {
            return state.GetAll();
        }

        // To get state by state id
        [HttpGet("{Id}")]
        public State GetById(int Id)
        {
            return state.GetById(Id);
        }

        // To check whether state name exist or not
        [HttpGet("{StateName}")]
        public bool AnyCity(string StateName)
        {
            return state.Any(s => s.StateName == StateName);
        }

        // To check whether any state exist or not 
        [HttpGet]
        public bool Any()
        {
            return state.Any();
        }

        //To insert state data
        [HttpPost]
        public string Create([FromBody] State AddState)
        {
            if (!state.Any(s => s.StateName == AddState.StateName))
            {
                if (country.Any(s => s.CountryId == AddState.CountryId))
                {
                    state.Create(AddState);
                    State added = context.States.ToList().Last();
                    return $"New state {added.StateName} is added in country id {added.CountryId} with state id {added.StateId}";
                }
                else
                    return $"wrong country id {AddState.CountryId} is entered...";
            }
            else
                return $"There is already state named {AddState.StateName}...";
        }

        //To update placed order
        [HttpPut]
        public string UpdateState([FromBody] State updateState)
        {
            if (state.Any(s => s.StateId == updateState.StateId))
            {
                if (state.Any(s => s.StateName == updateState.StateName && s.CountryId == updateState.CountryId))
                {
                    return $"You can't choose this state name and country id as it is already exists...";
                }
                else
                {
                    if (country.Any(s => s.CountryId == updateState.CountryId))
                    {
                        state.Update(updateState);
                        return $"New staet name {updateState.StateName} with country id {updateState.CountryId} is applied for state id {updateState.StateId}";
                    }
                    else
                    {
                        return $"please chose an appropriate country id...";
                    }
                }
            }
            else
                return $"State id is not found...";
        }
        [HttpDelete("{StateId}")]
        public string Delete(int StateId)
        {
            if (state.Any(s => s.StateId == StateId))
            {
                IEnumerable<City> ArrCity = context.Cities.Where(s => s.StateId == StateId);
                State dummy = context.States.Where(s => s.StateName == "Dummy").First();
                foreach (var item in ArrCity)
                {
                    item.StateId = dummy.StateId;
                }
                context.SaveChanges();
                State deleteState = state.GetById(StateId);
                state.Delete(deleteState);
                return $"State id {StateId} is deleted successfully...";
            }
            else
            {
                return $"There is no such state id {StateId}";
            }
        }
    }
}
