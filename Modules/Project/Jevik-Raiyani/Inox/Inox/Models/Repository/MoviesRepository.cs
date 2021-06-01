using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class MoviesRepository : GenericRepository<Movie>, IMovies
    {
        public MoviesRepository(inoxContext context) : base(context)
        {

        }
    }
}

