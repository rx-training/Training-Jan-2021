using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Models;

namespace UberAPI.Code.Interfaces
{
    public interface IAdminRepo : IGenericRepo<Admin>
    {
        bool BlockRider(long id, string action);
        bool ValidateAdmin(string cred, long id);
    }
}
