using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.Repository
{
    public class ViewMenRepository999 : BATARepository<ViewMen999>, IViewMen999
    {
        public ViewMenRepository999(BATAContext context) : base(context)
        {

        }
    }
}
