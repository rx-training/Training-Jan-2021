using PracticeDBAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeDBAPI.Repositories
{
    public interface ICustomer
    {
        List<Customer> GetCustomers();
    }
}
