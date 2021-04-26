using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Models.Interfaces
{
    public interface ICustomerRepository
    {
        
        bool Insert(Customer customer);
        Customer Show(int id);
        bool Delete(int id);
        Customer Update(Customer customer);

        IEnumerable<Customer> Index();
    }
}
