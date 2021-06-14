using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Models;

namespace UberAPI.Code.Interfaces
{
    public interface IDriverRepo : IGenericRepo<Driver>
    {
        VDriver ViewProfile(int id);
        bool ValidateDriver(string cred, int id);

        Vehicle AddVehicleDetails(Vehicle vehicle);
    }
}
