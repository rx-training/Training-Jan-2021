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

        public bool BlockRider(long id, string action)
        {
            var rider = context.Riders.SingleOrDefault(x => x.RiderId == id);
            if (rider == null)
            {
                return false;
            }

            if(action.ToLower() == "block")
            {
                rider.IsBlocked = true;
            }
            else if (action.ToLower() == "unblock")
            {
                rider.IsBlocked = false;
            }
            else
            {
                return false;
            }
            context.SaveChanges();
            return true;
        }

        public bool ValidateAdmin(string cred, long id)
        {
            var admin = context.Admins.SingleOrDefault(x => x.Id == id);
            if (admin == null || admin.UserId != cred)
            {
                return false;
            }
            return true;
        }
    }
}
