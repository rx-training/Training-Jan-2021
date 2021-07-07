using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelCostRepository : IHotelCostRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public HotelCostRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteCost(int costid)
        {
            var data = context.HotelCostDetails.SingleOrDefault(s=>s.CostId==costid);
            context.HotelCostDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<HotelCostDetail> GetAllCost()
        {
            var data = context.HotelCostDetails;
            return data;
        }

        public HotelCostDetail GetCostById(int CostId)
        {
            var data = context.HotelCostDetails.SingleOrDefault(s => s.CostId == CostId);
            return data;
        }

        public void InsertCost(HotelCostDetail cost)
        {
            context.HotelCostDetails.Add(cost);
            context.SaveChanges();
        }

        public void UpdateCost(int CostId, HotelCostDetail cost)
        {
            var data = context.HotelCostDetails.SingleOrDefault(s => s.CostId == CostId);
            data.Amount = cost.Amount;
            data.Tax = cost.Tax;
            data.TotelAmount = cost.TotelAmount;
            context.SaveChanges();
        }
    }
}
