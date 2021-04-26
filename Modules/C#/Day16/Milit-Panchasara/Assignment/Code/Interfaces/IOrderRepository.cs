using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        IEnumerable<Order>? GetAllOrders(int cid);
        Order? CreateOrder(int cid, IEnumerable<OrderInput> orderInputs);
    }
}
