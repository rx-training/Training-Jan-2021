using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.IRepository
{
    public interface IOrder : IGenericInterface<Order>
    {
        public IEnumerable GetAllOrders(int id);
        public IEnumerable GetByOrderId(int id, int orderId);
        public void CreateOrder(int customerId, int shipToid, string toy, int qty);
    }
}
