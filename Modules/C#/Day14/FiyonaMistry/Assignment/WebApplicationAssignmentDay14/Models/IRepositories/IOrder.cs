using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay14.Models.IRepositories
{
    public interface IOrder : GenericInterface<Order>
    {
        Order CreateOrder(int id, IEnumerable<Order> order);
    }
}
