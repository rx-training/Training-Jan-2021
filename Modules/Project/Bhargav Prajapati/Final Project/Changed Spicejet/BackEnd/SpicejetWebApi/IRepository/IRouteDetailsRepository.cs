using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IRouteDetailsRepository
    {
        public IEnumerable<RouteDetail> GetAllRoute();
        public RouteDetail GetRouteDetailsById(int RouteId);
        public void InsertRoute(RouteDetail route);
        public void UpdateRoute(RouteDetail route,int RouteId);
        public void DeleteRoute(int RouteId);
    }
}
