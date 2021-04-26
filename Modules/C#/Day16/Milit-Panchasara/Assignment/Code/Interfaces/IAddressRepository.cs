using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.Interfaces
{
    public interface IAddressRepository : IRepository<CustomerAddress>
    {
        IEnumerable<CustomerAddress>? GetAllAddress(int cid);
        IEnumerable<CustomerAddress>? CreateAddress(int cid, IEnumerable<CustomerAddress> AddressInputs);
    }
}
