using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.Models.Repository
{
    public class CustomerRepository: GenericRepository<Customer>, ICustomer
    {
        public CustomerRepository(TESTContext context):base(context)
        {

        }
    }
}
