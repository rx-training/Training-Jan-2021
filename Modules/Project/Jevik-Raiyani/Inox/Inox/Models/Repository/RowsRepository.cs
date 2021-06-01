using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class RowsRepository : GenericRepository<Row>, IRows
    {
        public RowsRepository(inoxContext context) : base(context)
        {

        }
    }
}