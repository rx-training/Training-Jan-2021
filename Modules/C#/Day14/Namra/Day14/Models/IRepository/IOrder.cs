using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day14.Models.IRepository
{
    public interface IOrder : ICompany<Order>
    {
        string OrderToys();
        int Bill(string toys);
        int Offer(int bill);
    }
}
