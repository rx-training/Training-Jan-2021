using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;

namespace UberAPI.Code.RepositoryDB
{
    public class AdminRepo : GenericRepo<Admin>, IAdminRepo
    {
        public AdminRepo(UberContext context) : base(context)
        {
        }
    }
}
