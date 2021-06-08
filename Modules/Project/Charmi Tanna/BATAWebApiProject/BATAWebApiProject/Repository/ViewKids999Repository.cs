using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BATAWebAPI.Models.Repository
{
    public class ViewKidRepository999 : BATARepository<ViewKids999>, IViewKids999
    {
        public ViewKidRepository999(BATAContext context) : base(context)
        {

        }
    }
}
