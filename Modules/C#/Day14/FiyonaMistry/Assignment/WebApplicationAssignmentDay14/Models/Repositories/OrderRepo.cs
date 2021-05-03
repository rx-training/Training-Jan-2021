using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay14.Models.IRepositories;

namespace WebApplicationAssignmentDay14.Models.Repositories
{
    public class OrderRepo : GenericRepository<Order>, IOrder
    {
        public OrderRepo(ToyManufacturingContext context) : base(context)
        {

        }

        public Order CreateOrder(int tid, IEnumerable<Order> order)
        {
            double totalPrice = 0.00;

            Order newOrder = new Order();
            var toy = context.Toys.Single(t => t.ToyId == tid).Amount;

            foreach (var item in order)
            {
                newOrder.Items = item.Items;
                newOrder.Price = item.Items * toy;
                newOrder.OrderDate = System.DateTime.Now;
                newOrder.AdId = item.AdId;
                newOrder.CustId = item.CustId;
                context.Orders.Add(new Order() { Items = newOrder.Items, Price = newOrder.Price, OrderDate = newOrder.OrderDate,  AdId = newOrder.AdId, CustId = newOrder.CustId });
            }
            return newOrder;
        }
    }
}
