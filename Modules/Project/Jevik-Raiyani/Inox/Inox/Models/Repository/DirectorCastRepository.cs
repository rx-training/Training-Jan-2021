using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class DirectorCastRepository : GenericRepository<DirectorCast>, IDirectorCast
    {
        public DirectorCastRepository(inoxContext context) : base(context)
        {

        }
    }
}
