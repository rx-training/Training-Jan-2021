using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class VCastOfMoviesRepository : GenericRepository<VCastofmovie>, IVCastOfMovies
    {
        public VCastOfMoviesRepository(inoxContext context) : base(context)
        {

        }
    }
}