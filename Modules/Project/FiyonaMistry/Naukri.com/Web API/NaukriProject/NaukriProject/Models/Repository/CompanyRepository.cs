using Microsoft.EntityFrameworkCore;
using NaukriProject.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NaukriProject.Models.Repository
{
    public class CompanyRepository : GenericRepository<Company>, ICompany
    {
        public CompanyRepository(NaukriDbContext context) : base(context)
        {
            
        }
    }
}
