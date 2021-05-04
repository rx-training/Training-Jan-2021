using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class CheckinDetailsRepository : ICheckInDetailsRepository
    {
        private readonly SPICEJETContext context;
        public CheckinDetailsRepository(SPICEJETContext ctx)
        {
            context = ctx;
        }

        public IEnumerable<CheckinDetail> GetAllcheckinDetails()
        {
            var data = context.CheckinDetails;
            return data;
        }

        public IEnumerable<CheckinDetail> viewcheckinDetails(string PNRNUmber)
        {
           
        var data = context.CheckinDetails.Where(s=>s.Pnrno==PNRNUmber);
            return data;           
        }
    }
}
