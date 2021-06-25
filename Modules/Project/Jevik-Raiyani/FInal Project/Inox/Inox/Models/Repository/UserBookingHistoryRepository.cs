using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class UserBookingHistoryRepository : GenericRepository<UserBookingHistory>, IUserBookingHistory
    {
        public UserBookingHistoryRepository(inoxContext context) : base(context)
        {

        }
    }
}