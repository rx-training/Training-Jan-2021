using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.Repository
{
    public class ViewWomanRepository : BATARepository<ViewWoman>, IViewWoman
    {
        public ViewWomanRepository(BATAContext context) : base(context)
        {

        }
    }
}
