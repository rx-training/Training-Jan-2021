using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class AirplaneCostCrudRepository : IAirplaneCostCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public AirplaneCostCrudRepository(ANGULARSPICEJETContext context)
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
            return context.CostDetails;
        }

        public void InsertCost(CostDetail cost)
        {
            context.CostDetails.Add(cost);
            context.SaveChanges();
        }

        public void UpdateCost(int CostId, CostDetail cost)
        {
            var data = context.CostDetails.SingleOrDefault(s => s.CostId == CostId);
            data.Amout = cost.Amout;
            data.Tex = cost.Tex;
            data.TotelAmount = cost.TotelAmount;
            context.SaveChanges();


        }
    }
}
