using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetAPI.IRepository
{
     public interface IFlightSearchRepository
    {
        public IEnumerable<FlightSearch> GetFlight();
    }
}
