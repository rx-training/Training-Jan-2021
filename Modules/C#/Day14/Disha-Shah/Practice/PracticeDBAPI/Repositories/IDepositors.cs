using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracticeDBAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeDBAPI.Repositories
{
    public interface IDepositors
    {
        List<DepositDTO> GetAll();

        IEnumerable GetAllCustomers(bool includeCustomer);

        void PostCustomer(Customer customer);

        string PutCustomer(string customer, Customer newCustomer);

        void DeleteCustomer(string name);

    }
}
