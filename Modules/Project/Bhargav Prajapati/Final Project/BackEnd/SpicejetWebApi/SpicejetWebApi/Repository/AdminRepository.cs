using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public AdminRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public IEnumerable<AdminDetail> GetAllAdmin()
        {
            var data = context.AdminDetails;
            return data;
        }
    }
}
