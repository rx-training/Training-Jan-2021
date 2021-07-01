using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class ScreensRepository : GenericRepository<Screen>, IScreens
    {
        public ScreensRepository(inoxContext context) : base(context)
        {

        }
    }
}