using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface ITripDetailsCrudRepository
    {
        public IEnumerable<TravelTrip> GetAllTrip();
        public void InsertData(TravelTrip travel);
        public void UpdateTrip(int tripid, TravelTrip travel);
        public void DeleteTrip(int tripid);
    }
}
