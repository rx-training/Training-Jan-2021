using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.IRepositorySpicejet
{
    public interface IAirPortRepository : SpicejetGeneric<Airport>
    {
        public IEnumerable<Airport> GetdatabyId(string AirportName);
    }
}
