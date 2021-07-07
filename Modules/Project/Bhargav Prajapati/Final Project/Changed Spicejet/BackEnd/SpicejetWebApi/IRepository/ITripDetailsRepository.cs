using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface ITripDetailsRepository
    {
        public IEnumerable<TripDetail> GetAllTrip();
        public TripDetail GetTripById(int TripId);
        public void InsertTrip(TripDetail trip);
        public void UpdateTrip(int TripId,TripDetail trip);
        public void DeleteTrip(int TripId);
    }
}
