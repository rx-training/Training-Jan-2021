using NaukriProject.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Repository
{
    public class AdminRepository : GenericRepository<Admin>, IAdmin
    {
        public AdminRepository(NaukriDbContext context) : base(context)
        {

        }
    }
}
