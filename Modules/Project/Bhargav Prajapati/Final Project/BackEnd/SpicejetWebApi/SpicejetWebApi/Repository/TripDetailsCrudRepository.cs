using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class TripDetailsCrudRepository : ITripDetailsCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public TripDetailsCrudRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public void DeleteTrip(int tripid)
        {
            var data = context.TravelTrips.SingleOrDefault(s=>s.TravelId==tripid);
            context.TravelTrips.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<TravelTrip> GetAllTrip()
        {
            return context.TravelTrips;
        }

        public void InsertData(TravelTrip travel)
        {
            context.TravelTrips.Add(travel);
            context.SaveChanges();
        }

        public void UpdateTrip(int tripid, TravelTrip travel)
        {
            var data = context.TravelTrips.SingleOrDefault(s => s.TravelId == tripid);
            data.DepatureCity = travel.DepatureCity;
            data.DepatureAirPortName = travel.DepatureAirPortName;
            data.ArrivedCity = travel.ArrivedCity;
            data.ArriveAirPortName = travel.ArriveAirPortName;
            data.DepartDate = travel.DepartDate;
            data.ArriveDate = travel.ArriveDate;
            data.DepartTime = travel.DepartTime;
            data.ArriveTime = travel.ArriveTime;
            data.AirPlaneId = travel.AirPlaneId;
            data.CostId = travel.CostId;
            context.SaveChanges();
        }
    }
}
