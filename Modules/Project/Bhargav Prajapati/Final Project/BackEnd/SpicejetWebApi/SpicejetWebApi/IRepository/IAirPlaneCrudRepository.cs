using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public  interface IAirPlaneCrudRepository
    {
        public IEnumerable<AirplaneDetail> GetAllAirPlane();
        public void InsertAirPlane(AirplaneDetail airplane);
        public void UpdateAirPlane(int AirplaneId,AirplaneDetail airplane);
        public void DeleteAirplane(int AirplaneId);
    }
}
