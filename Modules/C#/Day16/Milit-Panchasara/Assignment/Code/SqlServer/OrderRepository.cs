using Assignment.Code.Interfaces;
using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.SqlServer
{
    public class OrderRepository : GenericRepository<Order>, IOrderRepository
    {
        public OrderRepository(ToyCompanyContext _context) : base(_context)
        {
        }

        public Order? CreateOrder(int cid, IEnumerable<OrderInput> orderInputs)
        {
            if (!context.Customers.Any(x => x.Id == cid))
            {
                return null;
            }
            var totalPrice = 0;
            var orderItemsList = new List<OrderItem>();

            var newOrder = new Order();
            newOrder.CustomerId = cid;
            newOrder.OrderDate = DateTime.Now;

            foreach (var item in orderInputs)
            {
                if(!context.Toys.Any(x => x.Id == item.ToyId) || item.Quantity < 1)
                {
                    return null;
                }
                totalPrice += context.Toys.Single(x => x.Id == item.ToyId).Price;
                var orderItem = new OrderItem() { ToyId = item.ToyId, Quantity = item.Quantity, Order = newOrder };
                orderItemsList.Add(orderItem);
            }

            newOrder.OrderAmount = totalPrice;
            context.Orders.Add(newOrder);
            context.OrderItems.AddRange(orderItemsList);
            context.SaveChanges();
            var discount = Convert.ToInt32(context.Offers.FromSqlRaw($"exec usp_CalculateOffer @OrderId = {newOrder.Id}").AsEnumerable().First().OfferAmount);
            newOrder.OfferAmount = discount;
            context.SaveChanges();

            foreach (var item in newOrder.OrderItems)
            {
                item.Toy = context.Toys.Find(item.ToyId);
            }
            return newOrder;
        }

        public IEnumerable<Order>? GetAllOrders(int cid)
        {
            if(!context.Customers.Any(x => x.Id == cid))
            {
                return null;
            }

            var orders = context.Orders.Include(x => x.OrderItems).Where(x => x.CustomerId == cid).ToList();
            foreach (var order in orders)
            {
                foreach (var item in order.OrderItems)
                {
                    item.Toy = context.Toys.Find(item.ToyId);
                }
            }
            return orders;
        }
    }
}
