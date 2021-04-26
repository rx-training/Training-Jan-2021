using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Repository
{
    public class OrderRepository : GenericRepository<Order>, IOrder
    {
        public OrderRepository(ToyCompanyDBContext context) : base(context)
        {

        }

        public IEnumerable GetAllOrders(int id)
        {
            var orders = context.Orders
                                .Include(x => x.OrderDetails)
                                .ThenInclude(x => x.Toy)
                                .Include(x => x.OrderDetails)
                                .ThenInclude(x => x.ShipTo)
                                .Where(x => x.CustomerId == id)
                                .Select(x => new
                                {
                                    Order = new Order
                                    {
                                        Id = x.Id,
                                        OrderDateTime = x.OrderDateTime,
                                        Customer = new Customer
                                        {
                                            Id = x.Customer.Id,
                                            FirstName = x.Customer.FirstName,
                                            LastName = x.Customer.LastName,
                                            Address = x.Customer.Address,
                                            Contact = x.Customer.Contact
                                        }
                                    }
                                });

            return orders;
        }

        public IEnumerable GetByOrderId(int id, int orderId)
        {
            var orderInfo = context.OrderDetails
                                .Include(x => x.Toy)
                                .Include(x => x.ShipTo)
                                .Include(x => x.Order)
                                .Where(x=>x.OrderId==orderId && x.Order.CustomerId==id)
                                .Select(x => new
                                {
                                    OrderDetail = new OrderDetail
                                    {
                                        OrderId = orderId,
                                        Qty = x.Qty,
                                        ShipToId = x.ShipToId,
                                        ToyId= x.ToyId,
                                        Total = x.Total,
                                        ToBePaid = x.ToBePaid
                                    },
                                    Order = new Order
                                    {
                                        Id = orderId,
                                        CustomerId = id,
                                        OrderDateTime = x.Order.OrderDateTime,
                                        Customer = new Customer
                                        {
                                            Id = id,
                                            FirstName = x.Order.Customer.FirstName,
                                            LastName = x.Order.Customer.LastName
                                        }
                                    },
                                    Toy = new Toy
                                    {
                                        Id = x.ToyId,
                                        Name = x.Toy.Name,
                                        Price = x.Toy.Price,
                                        ToyCategory = new ToyCategory
                                        {
                                            Id = x.Toy.ToyCategory.Id,
                                            Name = x.Toy.ToyCategory.Name
                                        }
                                    },
                                    ShipTo = new ShipTo
                                    {
                                        Id = x.ShipToId,
                                        Address = x.ShipTo.Address,
                                        City = x.ShipTo.City,
                                        State = x.ShipTo.State,
                                        Country = x.ShipTo.Country
                                    }
                                });

            return orderInfo;
        }

        public void CreateOrder(int customerId, int shipToid, string toy, int qty)
        {
            var toyInfo = context.Toys.SingleOrDefault(x => x.Name == toy);

            int toyid = toyInfo.Id;

            int toyQty = toyInfo.Qty;

            if(qty<toyQty)
            {
                var shipToInfo = context.ShipTos.SingleOrDefault(x => x.CustomerId == customerId && x.Id == shipToid);

                if (shipToInfo != null)
                {

                    var orderInfo = context.Orders.Where(x => x.CustomerId == customerId).OrderByDescending(x => x.OrderDateTime).ToList().Take(1);

                    DateTime orderDate = DateTime.Now;

                    foreach (var item in orderInfo)
                    {
                        orderDate = item.OrderDateTime;
                    }

                    DateTime dateTime;

                    decimal total = 0.0m;

                    total = CalcTotal(toy, qty);

                    if (orderDate.Date != DateTime.Now.Date)
                    {
                        dateTime = DateTime.Now;

                        context.Orders.Add(new Order()
                        {
                            CustomerId = customerId,
                            OrderDateTime = dateTime
                        });
                        context.SaveChanges();

                        var getOrderInfo = context.Orders.SingleOrDefault(x => x.CustomerId == customerId && x.OrderDateTime == dateTime);

                        context.OrderDetails.Add(new OrderDetail()
                        {
                            OrderId = getOrderInfo.Id,
                            ShipToId = shipToid,
                            ToyId = toyid,
                            Qty = qty,
                            Total = total,
                            ToBePaid = CalcOfferTotal(total)
                        });
                        context.SaveChanges();
                    }
                    else
                    {
                        var getOrderInfo = context.Orders.SingleOrDefault(x => x.CustomerId == customerId && x.OrderDateTime == orderDate);

                        context.OrderDetails.Add(new OrderDetail()
                        {
                            OrderId = getOrderInfo.Id,
                            ShipToId = shipToid,
                            ToyId = toyid,
                            Qty = qty,
                            Total = total,
                            ToBePaid = CalcOfferTotal(total)
                        });
                        context.SaveChanges();
                    }

                    UpdateToy(toy, qty);
                }
            }
        }

        private void UpdateToy(string toy, int qty)
        {
            var toyInfo = context.Toys.SingleOrDefault(x => x.Name == toy);

            toyInfo.Qty = toyInfo.Qty - qty;
            context.SaveChanges();
        }

        private decimal CalcTotal(string toy, int qty)
        {
            var toyInfo = context.Toys.SingleOrDefault(x => x.Name == toy);
            return Convert.ToDecimal(toyInfo.Price) * Convert.ToDecimal(qty);
        }

        private decimal CalcOfferTotal(decimal amount)
        {
            decimal discount1 = 0.05m;
            decimal discount2 = 0.1m;
            decimal discount3 = 0.15m;
            decimal discount4 = 0.2m;

            decimal finalAmount = 0.0m;

            if (amount >= 20000)
            {
                finalAmount = amount - (amount * discount4);
            }
            else if (amount >= 15000)
            {
                finalAmount = amount - (amount * discount3);
            }
            else if (amount >= 10000)
            {
                finalAmount = amount - (amount * discount2);
            }
            else if (amount >= 5000)
            {
                finalAmount = amount - (amount * discount1);
            }
            else
            {
                finalAmount = amount;
            }
            return finalAmount;
        }
    }
}
