using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelCostRepository
    {
        public IEnumerable<HotelCostDetail> GetAllCost();
        public HotelCostDetail GetCostById(int CostId);
        public void InsertCost(HotelCostDetail cost);
        public void UpdateCost(int CostId, HotelCostDetail cost);
        public void DeleteCost(int costid);
    }
}
