using System;
using System.Linq;
using Day12_13Assignment.Models;
using Microsoft.EntityFrameworkCore;

namespace Day12_13Assignment
{
    class CustomerInfo
    {
        // Add Customer information
        ToyCompanyDBContext context = new ToyCompanyDBContext();
            
        public void InsertCustomer(Customer entity)
        {
            context.Customers.Add(entity);
            context.SaveChanges();
        }

        // Update Customer Information
        public void UpdateCustomer(Customer oldInfo, Customer newInfo)
        {
            var updateCustomer = context.Customers
                                    .SingleOrDefault<Customer>(x => x.FirstName == oldInfo.FirstName && x.LastName == oldInfo.LastName);

            updateCustomer.FirstName = newInfo.FirstName;
            updateCustomer.LastName = newInfo.LastName;
            updateCustomer.Address = newInfo.Address;
            updateCustomer.Contact = newInfo.Contact;
            context.SaveChanges();
        }

        // Delete Customer Information
        public void DeleteCustomer(Customer info)
        {
            var deleteCustomer = context.Customers
                                        .SingleOrDefault<Customer>(x => x.FirstName == info.FirstName && x.LastName == info.LastName);

            context.Customers.Remove(deleteCustomer);
            context.SaveChanges();
        }

        // Get informationof all toys
        public void GetAllToysInfo()
        {
            var allToysInfo = context.Toys.FromSqlRaw("uspGetAllToys");

            foreach (var item in allToysInfo)
            {
                Console.WriteLine($"{item.Name}\t{item.Description}\t{item.Price}\t{item.Qty}");
            }
        }

        // Get information of a particular toy
        public int GetToyInfo(Toy toy)
        {
            int qty = 0;
            
            var toys = context.Toys
                .FromSqlRaw($"uspGetToyInfo {toy.Name}")
                .ToList();

            Console.WriteLine();
            foreach (var item in toys)
            {
                    
                Console.WriteLine($"{item.Name}\t{item.Description}\t{item.Price}\t{item.Qty}");
                qty = item.Qty;
            }

            return qty;
        }

        // Calculate amount before discount
        public decimal CalcAmount(Toy toy, int qty)
        {
            decimal amount = 0.0m;

            var result = context.Toys
                                .SingleOrDefault(s => s.Name == toy.Name);

            amount = qty * result.Price;

            return amount;
        }

        // Final Amount to be paid after discount
        public decimal Offers(decimal amount)
        {
            decimal discount1 = 0.05m;
            decimal discount2 = 0.1m;
            decimal discount3 = 0.15m;
            decimal discount4 = 0.2m;

            decimal finalAmount = 0.0m;

            if(amount >=20000)
            {
                finalAmount = amount - (amount * discount4);
            }
            else if(amount >= 15000)
            {
                finalAmount = amount- (amount * discount3);
            }
            else if(amount>=10000)
            {
                finalAmount = amount - (amount * discount2);
            }
            else if(amount>=5000)
            {
                finalAmount = amount - (amount * discount1);
            }
            else
            {
                finalAmount = amount;
            }
            return finalAmount;
        }

        // Book Order of a particular customer
        public Order BookOrder(Customer info)
        {
            int orderId;
            int custId;
            
            // Get customer id
            var custResult = context.Customers
                                    .SingleOrDefault(x => x.FirstName == info.FirstName && x.LastName == info.LastName);

            custId = custResult.Id;

            // current date
            var orderDate = DateTime.Now;

            // add information to Order table
            var order = new Order() { CustomerId = custId, OrderDateTime = orderDate};
            context.Orders.Add(order);
            context.SaveChanges();

            // Get orderid
            var orderResult = context.Orders
                                    .SingleOrDefault(x => x.CustomerId == custId && x.OrderDateTime == orderDate);

            orderId = orderResult.Id;

            order = new Order() { Id = orderId, CustomerId = custId };
            return order;
        }

        // Order Details for a particular customer and product
        public void BookOrderDetails(Toy toy, Order order, ShipTo shipTo, int qty, decimal amount, decimal finalAmount)
        {
            
            // Get toyid
            var toyResult = context.Toys
                                .SingleOrDefault(x => x.Name == toy.Name);

            int toyId = toyResult.Id;

            // Get ShipTo address id
            var shipToResult = context.ShipTos
                                        .SingleOrDefault(x => x.Address == shipTo.Address && x.City == shipTo.City && x.State == shipTo.State && x.CustomerId==order.CustomerId);

            var shipToId = shipToResult.Id;

            // Add information to Order details table
            var orderDetails = new OrderDetail() { OrderId = order.Id, ToyId = toyId, ShipToId = shipToId, Qty = qty, Total = amount, ToBePaid = finalAmount };
            context.OrderDetails.Add(orderDetails);
            context.SaveChanges();

            // update quantity in toys table
            toyResult.Qty = toyResult.Qty - qty;
            context.SaveChanges();
        }

    }
}
