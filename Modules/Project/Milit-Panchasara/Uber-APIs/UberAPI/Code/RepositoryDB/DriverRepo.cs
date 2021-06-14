using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;

namespace UberAPI.Code.RepositoryDB
{
    public class DriverRepo : GenericRepo<Driver>, IDriverRepo
    {
        public DriverRepo(UberContext context) : base(context)
        {
        }

        public bool ValidateDriver(string cred, int id)
        {
            var driver = context.Drivers.SingleOrDefault(x => x.DriverId == id);
            if (driver == null || driver.UserId != cred)
            {
                return false;
            }
            return true;
        }

        public VDriver ViewProfile(int id)
        {
            try
            {
                return context.VDrivers.SingleOrDefault(x => x.DriverId == id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Vehicle AddVehicleDetails(Vehicle vehicle)
        {
            context.Vehicles.Add(vehicle);
            context.SaveChanges();
            return vehicle;
        }
    }
}
