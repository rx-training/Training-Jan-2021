using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelCostCrudRepository
    {
        public IEnumerable<HotelCostInfo> GettAllCost();
        public void InsertCost(HotelCostInfo cost);
        public void UpdateCost(int costId, HotelCostInfo cost);
        public void DeleteCost(int costId);
    }
}
