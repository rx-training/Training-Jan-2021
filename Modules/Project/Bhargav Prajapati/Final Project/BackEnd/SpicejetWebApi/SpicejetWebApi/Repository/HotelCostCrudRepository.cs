using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelCostCrudRepository : IHotelCostCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public HotelCostCrudRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public void DeleteCost(int costId)
        {
            var data = context.HotelCostInfos.SingleOrDefault(s=>s.CostId==costId);
            context.HotelCostInfos.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<HotelCostInfo> GettAllCost()
        {
            return context.HotelCostInfos;
        }

        public void InsertCost(HotelCostInfo cost)
        {
            context.HotelCostInfos.Add(cost);
            context.SaveChanges();
        }

        public void UpdateCost(int costId, HotelCostInfo cost)
        {
            var data = context.HotelCostInfos.SingleOrDefault(s => s.CostId == costId);
            data.Amount = cost.Amount;
            data.Tax = cost.Tax;
            data.TotelPrice = cost.TotelPrice;
            context.SaveChanges();
            
        }
    }
}
