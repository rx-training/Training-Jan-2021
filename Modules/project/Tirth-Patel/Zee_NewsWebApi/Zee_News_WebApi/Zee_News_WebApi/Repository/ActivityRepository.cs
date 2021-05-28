using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zee_News_WebApi.Models;
using Zee_News_WebApi.IRepository;

namespace Zee_News_WebApi.Repository
{
    public class ActivityRepository : GenericRepository<Activity>,IActivities
    {
        public ActivityRepository(ZeeNewsContext context) : base(context)
        { }
    }
}
