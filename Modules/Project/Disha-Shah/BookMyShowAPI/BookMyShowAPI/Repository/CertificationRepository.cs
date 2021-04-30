using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class CertificationRepository : GenericRepository<Certification>, ICertification
    {
        public CertificationRepository(BookMyShowDBContext context) : base(context)
        {

        }
    }
}
