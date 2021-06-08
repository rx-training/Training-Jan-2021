using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.Repository
{
    public class ViewWomanRepository999 : BATARepository<ViewWomen999>, IViewWomen999
    {
        public ViewWomanRepository999(BATAContext context) : base(context)
        {

        }
    }
}
