using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class TripDetailsRepository : ITripDetailsRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public TripDetailsRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteTrip(int TripId)
        {
            var data = context.TripDetails.SingleOrDefault(s=>s.TripId==TripId);
            context.TripDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<TripDetail> GetAllTrip()
        {
            var data = context.TripDetails;
            return data;

        }

        public TripDetail GetTripById(int TripId)
        {
            var data = context.TripDetails.SingleOrDefault(s=>s.TripId==TripId);
            return data;
        }

        public void InsertTrip(TripDetail trip)
        {
            context.TripDetails.Add(trip);
            context.SaveChanges();
        }

        public void UpdateTrip(int TripId, TripDetail trip)
        {
            var data = context.TripDetails.SingleOrDefault(s => s.TripId == TripId);
            data.DepartureAirportName = trip.DepartureAirportName;
            data.ArrivedAirportName = trip.ArrivedAirportName;
            data.DepatureCity = trip.DepatureCity;
            data.ArrivedCity = trip.ArrivedCity;
            data.DepartDateTime = trip.DepartDateTime;
            data.ArrivedDateTime = trip.ArrivedDateTime;
            context.SaveChanges();
        }
    }
}
