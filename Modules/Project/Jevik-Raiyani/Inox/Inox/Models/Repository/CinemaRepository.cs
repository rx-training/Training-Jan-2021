using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class CinemaRepository : GenericRepository<Cinema>, ICinema
    {
        public CinemaRepository(inoxContext context) : base(context)
        {

        }
    }
}
