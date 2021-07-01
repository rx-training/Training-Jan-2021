using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class MovieDirectorCastRepository : GenericRepository<MovieDirectorCast>, IMovieDirectorCast
    {
        public MovieDirectorCastRepository(inoxContext context) : base(context)
        {

        }
    }
}