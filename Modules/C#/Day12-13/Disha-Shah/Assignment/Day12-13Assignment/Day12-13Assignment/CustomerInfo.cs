using System;
using System.Linq;
using Day12_13Assignment.Models;
using Microsoft.EntityFrameworkCore;

namespace Day12_13Assignment
{
    class CustomerInfo
    {
        // Add Customer information
        public void InsertCustomer(string fname, string lname, long contact, string address)
        {
            using (var context = new ToyCompanyDBContext())
            {
                var customer = new Customer() { FirstName = fname, LastName = lname, Contact = contact, Address = address };
                context.Customers.Add(customer);
                context.SaveChanges();
            }
        }

        // Update Customer Information
        public void UpdateCustomer(string oldFname, string oldLname, string newFname, string newLname, long newContact, string newAddress)
        {
            using (var context = new ToyCompanyDBContext())
            {
                var updateCustomer = context.Customers
                                       .SingleOrDefault<Customer>(x => x.FirstName == oldFname && x.LastName == oldLname);

                updateCustomer.FirstName = newFname;
                updateCustomer.LastName = newLname;
                updateCustomer.Address = newAddress;
                updateCustomer.Contact = newContact;
                context.SaveChanges();
            }

        }

        // Delete Customer Information
        public void DeleteCustomer(string oldFName, string oldLName)
        {
            using (var context = new ToyCompanyDBContext())
            {
                var deleteCustomer = context.Customers
                                          .SingleOrDefault<Customer>(x => x.FirstName == oldFName && x.LastName == oldLName);

                context.Customers.Remove(deleteCustomer);
                context.SaveChanges();
            }
        }

        // Get informationof all toys
        public void GetAllToysInfo()
        {
            using (var context = new ToyCompanyDBContext())
            {
                var allToysInfo = context.Toys.FromSqlRaw("uspGetAllToys");

                foreach (var item in allToysInfo)
                {
                    Console.WriteLine($"{item.Name}\t{item.Description}\t{item.Price}\t{item.Qty}");
                }
            }
        }

        // Get information of a particular toy
        public int GetToyInfo(string toy)
        {
            int qty = 0;
            using (var context = new ToyCompanyDBContext())
            {
                var toys = context.Toys
                  .FromSqlRaw($"uspGetToyInfo {toy}")
                  .ToList();

                Console.WriteLine();
                foreach (var item in toys)
                {
                    
                    Console.WriteLine($"{item.Name}\t{item.Description}\t{item.Price}\t{item.Qty}");
                    qty = item.Qty;
                }

            }
            return qty;
        }

        // Calculate amount before discount
        public decimal CalcAmount(string toy, int qty)
        {
            decimal amount = 0.0m;

            using (var context = new ToyCompanyDBContext())
            {

                var result = context.Toys
                                    .SingleOrDefault(s => s.Name == toy);

                amount = qty * result.Price;
                
            }

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
        public int[] BookOrder(string fname, string lname)
        {
            int orderId;
            int custId;
            using (var context = new ToyCompanyDBContext())
            {
                // Get customer id
                var custResult = context.Customers
                                        .SingleOrDefault(x => x.FirstName == fname && x.LastName == lname);

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

            }

            int[] arr = new int[2];
            arr[0] = orderId;
            arr[1] = custId;
            return arr;
        }

        // Order Details for a particular customer and product
        public void BookOrderDetails(string toy, int qty, int custId, string address, string city, string state, decimal amount, decimal finalAmount, int orderId)
        {
            using (var context = new ToyCompanyDBContext())
            {
                // Get toyid
                var toyResult = context.Toys
                                    .SingleOrDefault(x => x.Name == toy);

                int toyId = toyResult.Id;

                // Get ShipTo address id
                var shipToResult = context.ShipTos
                                           .SingleOrDefault(x => x.Address == address && x.City == city && x.State == state && x.CustomerId==custId);

                var shipToId = shipToResult.Id;

                // Add information to Order details table
                var orderDetails = new OrderDetail() { OrderId = orderId, ToyId = toyId, ShipToId = shipToId, Qty = qty, Total = amount, ToBePaid = finalAmount };
                context.OrderDetails.Add(orderDetails);
                context.SaveChanges();

                // update quantity in toys table
                toyResult.Qty = toyResult.Qty - qty;
                context.SaveChanges();
            }
        }

    }
}
