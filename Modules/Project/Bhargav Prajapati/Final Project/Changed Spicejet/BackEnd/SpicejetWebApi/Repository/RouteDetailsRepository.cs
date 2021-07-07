using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class RouteDetailsRepository : IRouteDetailsRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public RouteDetailsRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteRoute(int RouteId)
        {
            var data = context.RouteDetails.SingleOrDefault(s=>s.RouteId==RouteId);
            context.RouteDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<RouteDetail> GetAllRoute()
        {
            var data = context.RouteDetails;
            return data;
        }

        public RouteDetail GetRouteDetailsById(int RouteId)
        {
            var data = context.RouteDetails.SingleOrDefault(s => s.RouteId == RouteId);
            return data;
        }

        public void InsertRoute(RouteDetail route)
        {
            context.RouteDetails.Add(route);
            context.SaveChanges();
        }

        public void UpdateRoute(RouteDetail route, int RouteId)
        {
            var data = context.RouteDetails.SingleOrDefault(s => s.RouteId == RouteId);
            data.TripId = route.TripId;
            data.CostId = route.CostId;
            data.AirplaneId = route.AirplaneId;
            context.SaveChanges();
        }
    }
}
