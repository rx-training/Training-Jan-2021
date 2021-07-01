using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class VCinemaScreensRepository : GenericRepository<VCinemaScreen>, IVCinemaScreens
    {
        public VCinemaScreensRepository(inoxContext context) : base(context)
        {

        }
    }
}