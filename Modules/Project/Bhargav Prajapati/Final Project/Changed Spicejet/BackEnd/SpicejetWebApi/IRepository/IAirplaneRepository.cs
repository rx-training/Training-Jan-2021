using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IAirplaneRepository
    {
        public IEnumerable<AirplaneDetail> GetAllAirplane();
        public AirplaneDetail GetAirplaneById(int AirplaneId);
        public void InsertAirplane(AirplaneDetail airplane);
        public void UpdateAirplane(int AirplaneId,AirplaneDetail airplane);
        public void DeleteAirplane(int AirplaneId);
    }
}
