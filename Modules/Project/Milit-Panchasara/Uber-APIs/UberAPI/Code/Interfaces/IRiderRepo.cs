using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Models;

namespace UberAPI.Code.Interfaces
{
    public interface IRiderRepo : IGenericRepo<Rider>
    {
        VRider ViewProfile(int id);
        VRider EditProfile(int id, VRider request);
        bool ValidateRider(string cred, int id);
    }
}
