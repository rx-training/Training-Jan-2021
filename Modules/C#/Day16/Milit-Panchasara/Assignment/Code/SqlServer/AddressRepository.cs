using Assignment.Code.Interfaces;
using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.SqlServer
{
    public class AddressRepository : GenericRepository<CustomerAddress>, IAddressRepository
    {
        public AddressRepository(ToyCompanyContext _context) : base(_context)
        {
        }

        public IEnumerable<CustomerAddress>? CreateAddress(int cid, IEnumerable<CustomerAddress> AddressInputs)
        {
            if (!context.Customers.Any(x => x.Id == cid))
            {
                return null;
            }
            foreach (var item in AddressInputs)
            {
                if (String.IsNullOrWhiteSpace(item.Address))
                {
                    return null;
                }
                item.CustomerId = cid;
            }

            context.AddRange(AddressInputs);
            context.SaveChanges();
            return context.CustomerAddresses.Where(x => x.CustomerId == cid).ToList();
        }

        public IEnumerable<CustomerAddress> GetAllAddress(int cid)
        {
            if (!context.Customers.Any(x => x.Id == cid))
            {
                return null;
            }

            var addresses = context.CustomerAddresses.Where(x => x.CustomerId == cid).ToList();
            return addresses;
        }
    }
}
