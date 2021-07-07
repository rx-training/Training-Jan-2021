using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class AirplaneRepository : IAirplaneRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public AirplaneRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteAirplane(int AirplaneId)
        {
            var data = context.AirplaneDetails.SingleOrDefault(s=>s.AirplaneId==AirplaneId);
            context.AirplaneDetails.Remove(data);
            context.SaveChanges();
        }
        public void InsertAirplane(AirplaneDetail airplane)
        {
            context.AirplaneDetails.Add(airplane);
            context.SaveChanges();
        }

        public AirplaneDetail GetAirplaneById(int AirplaneId)
        {
            var data = context.AirplaneDetails.SingleOrDefault(s => s.AirplaneId == AirplaneId);
            return data;
        }

        public IEnumerable<AirplaneDetail> GetAllAirplane()
        {
            var data = context.AirplaneDetails;
            return data;
        }

        public void UpdateAirplane(int AirplaneId, AirplaneDetail airplane)
        {
            var data = context.AirplaneDetails.SingleOrDefault(s => s.AirplaneId == AirplaneId);
            data.AirplaneName = airplane.AirplaneName;
            data.ManufactureDate = airplane.ManufactureDate;
            data.AirplaneModel = airplane.AirplaneModel;
            data.ManufactureCompony = airplane.ManufactureCompony;
            data.SeatingCapacity = airplane.SeatingCapacity;
            context.SaveChanges();
        }
    }
}
