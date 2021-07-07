using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class AirplaneCostDetailsRepository : IAirplaneCostDetailsRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public AirplaneCostDetailsRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteCost(int CostId)
        {
            var data = context.CostDetails.SingleOrDefault(s=>s.CostId==CostId);
            context.CostDetails.Remove(data);
            context.SaveChanges();

        }

        public IEnumerable<CostDetail> GetAllCost()
        {
            var data = context.CostDetails;
            return data;
        }

        public CostDetail GetCostById(int CostId)
        {
            var data = context.CostDetails.SingleOrDefault(s => s.CostId == CostId);
            return data;
        }

        public void InsertCost(CostDetail cost)
        {
            context.CostDetails.Add(cost);
            context.SaveChanges();
        }

        public void UpdateCost(int CostId, CostDetail cost)
        {
            var data = context.CostDetails.SingleOrDefault(s => s.CostId == CostId);
            data.Amount = cost.Amount;
            data.Tax = cost.Tax;
            data.TotelCost = cost.TotelCost;
            context.SaveChanges();
        }

    }
}
