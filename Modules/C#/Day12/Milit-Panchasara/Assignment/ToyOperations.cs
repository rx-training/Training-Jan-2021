using Assignment.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assignment
{
    class ToyOperations
    {
        public List<Toy> ViewAllToys()
        {
            var context = new ToyCompanyContext();
            return context.Toys.ToList();
        }

        public bool IsToyExists(int id)
        {
            var context = new ToyCompanyContext();
            if(context.Toys.SingleOrDefault(x => x.Id == id) == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public Tuple<int, int> PlaceOrder(int customerId, List<Tuple<int, int>> itemList)
        {
            var context = new ToyCompanyContext();

            var newOrder = new Order();
            newOrder.CustomerId = customerId;
            newOrder.OrderDate = DateTime.Now;

            var orderItemList = new List<OrderItem>();
            int total = 0;
            foreach (var item in itemList)
            {
                var toy = context.Toys.Single(x => x.Id == item.Item1);
                total += (toy.Price * item.Item2);

                var orderItem = new OrderItem();
                orderItem.Order = newOrder;
                orderItem.Quantity = item.Item2;
                orderItem.ToyId = item.Item1;

                orderItemList.Add(orderItem);

                Console.WriteLine(toy.Name + " " + item.Item2);
            }
            newOrder.OrderAmount = total;
            context.Orders.Add(newOrder);

            context.OrderItems.AddRange(orderItemList);

            context.SaveChanges();
            var discount = Convert.ToInt32(context.Offers.FromSqlRaw($"exec usp_CalculateOffer @OrderId = {newOrder.Id}").AsEnumerable().First().OfferAmount);
            return new Tuple<int, int> (total - discount, discount);
        }

        public Dictionary<Order, List<OrderItem>> GetAllOrders(int loggedInUserId)
        {
            var context = new ToyCompanyContext();

            var orders = context.Orders.Where(x => x.CustomerId == loggedInUserId).ToList();
            var orderItems = context.OrderItems.Include(x => x.Toy).ToList();

            var orderDict = new Dictionary<Order, List<OrderItem>>();

            foreach (var order in orders)
            {
                var orderItemList = new List<OrderItem>();
                orderItemList.AddRange(orderItems.Where(x => x.OrderId == order.Id));
                orderDict.Add(order, orderItemList);
            }

            return orderDict; 
        }
    }
}
