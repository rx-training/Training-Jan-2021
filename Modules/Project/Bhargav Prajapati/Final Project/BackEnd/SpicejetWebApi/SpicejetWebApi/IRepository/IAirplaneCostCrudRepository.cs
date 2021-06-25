using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IAirplaneCostCrudRepository
    {
        public IEnumerable<CostDetail> GetAllCost();
        public void InsertCost(CostDetail cost);
        public void UpdateCost(int CostId, CostDetail cost);
        public void DeleteCost(int CostId);
    }
}
