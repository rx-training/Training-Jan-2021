using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class UsersRepository : GenericRepository<User>, IUsers
    {
        public UsersRepository(inoxContext context) : base(context)
        {

        }
    }
}