using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class AirplaneCrudRepository : IAirPlaneCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public AirplaneCrudRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public void DeleteAirplane(int AirplaneId)
        {
            var data = context.AirplaneDetails.SingleOrDefault(s=>s.AirPlaneId==AirplaneId);
            context.AirplaneDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<AirplaneDetail> GetAllAirPlane()
        {
            var data = context.AirplaneDetails;
            return data;
        }

        public void InsertAirPlane(AirplaneDetail airplane)
        {
            context.AirplaneDetails.Add(airplane);
            context.SaveChanges();
        }

        public void UpdateAirPlane(int AirplaneId, AirplaneDetail airplane)
        {
            var data = context.AirplaneDetails.SingleOrDefault(s => s.AirPlaneId == AirplaneId);
            data.AirPlaneName = airplane.AirPlaneName;
            data.SeatingCapacity = airplane.SeatingCapacity;
            data.Model = airplane.Model;
            data.Make = airplane.Make;
            context.SaveChanges();
            
        }
    }
}
