using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class ViewSearchHotelRepository : IViewSearchHotelRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public ViewSearchHotelRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public IEnumerable<VHotelSearchedDetail> GetAllHotel()
        {
            var data = context.VHotelSearchedDetails;
            return data;
        }
    }
}
