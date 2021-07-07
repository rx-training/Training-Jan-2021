using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IAirplaneCostDetailsRepository
    {
        public IEnumerable<CostDetail> GetAllCost();
        public CostDetail GetCostById(int CostId);
        public void InsertCost(CostDetail cost);
        public void UpdateCost(int CostId,CostDetail cost);
        public void DeleteCost(int CostId);
    }
}
