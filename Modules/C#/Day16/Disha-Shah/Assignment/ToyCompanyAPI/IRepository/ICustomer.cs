using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.IRepository
{
    public interface ICustomer : IGenericInterface<Customer>
    {
        public void CreateShipTo(int customerId, ShipTo shipTo);

        public void DeleteShipTo(int customerId, int shipToId);

    }
}
