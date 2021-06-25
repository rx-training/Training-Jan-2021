using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class ShowTimeRepository : GenericRepository<ShowTime>, IShowTime
    {
        public ShowTimeRepository(inoxContext context) : base(context)
        {

        }
    }
}