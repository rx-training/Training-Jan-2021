using System;
using System.Collections.Generic;
using EFAssignment_Day12.Models;

namespace EFAssignment_Day12
{
    class Day12
    {
        static void Main(string[] args)
        {
            // Initial Values in Tables :
            //List<ManufacturingPlant> mp = new List<ManufacturingPlant>()
            //{
            //    new ManufacturingPlant(){ PlantName = "Wooden"},
            //    new ManufacturingPlant(){ PlantName = "Board Games"}
            //};

            //List<Toys> toys = new List<Toys>()
            //{
            //    new Toys(){ToyName = "Clapping Monkey", Description = "Monkey clapping hands", Amount = 40.00, PlantId = 1},
            //    new Toys(){ToyName = "Dancing Monkey", Description = "Wooden dancing Monkey", Amount = 45.00, PlantId = 1},
            //    new Toys(){ToyName = "Monopoly", Description = "Monopoly board game", Amount = 400.00, PlantId = 2},
            //    new Toys(){ToyName = "Sequence", Description = "Sequence board game", Amount = 250.00, PlantId = 2},
            //    new Toys(){ToyName = "Jenga Bridge", Description = "Jenga Bridge game", Amount = 450.00, PlantId = 2}
            //};

            //List<Customers> customers = new List<Customers>()
            //{
            //    new Customers(){FirstName = "Fiyona", LastName = "Mistry", Gender = 'F', DOB = new DateTime(11/22/1998), Email = "fiyonamistry@gmail.com", PhoneNumber = 7777901827},
            //    new Customers(){FirstName = "Divyang", LastName = "Mistry", Gender = 'M', DOB = new DateTime(12/29/1995), Email = "divyangmistry@gmail.com", PhoneNumber = 7777901836}
            //};

            //List<Addresses> addresses = new List<Addresses>()
            //{
            //    new Addresses(){Address = "B/h ATPL", City = "Ahmedabad", State = "Gujarat", Pincode = 382421, CustId = 1},
            //    new Addresses(){Address = "Sector 6", City = "Gandhinagar", State = "Gujarat", Pincode = 382487, CustId = 1},
            //    new Addresses(){Address = "Borivali", City = "Mumbai", State = "Maharashtra", Pincode = 457898, CustId = 2}
            //};

            //List<Orders> orders = new List<Orders>()
            //{
            //    new Orders(){ OrderDate = new DateTime(2020/10/2), Items = 2, Price = 85.00, CustId = 2, AdId = 3},
            //    new Orders(){ OrderDate = new DateTime(2020/12/12), Items = 1, Price = 250.00, CustId = 1, AdId = 2}
            //};

            //List<OrderToys> orderToys = new List<OrderToys>()
            //{
            //    new OrderToys(){OrderId = 1, ToyId = 1},
            //    new OrderToys(){OrderId = 1, ToyId = 2},
            //    new OrderToys(){OrderId = 2, ToyId = 4},
            //};

            //using (var context = new ToyManufacturingContext())
            //{
            //    context.ManufacturingPlants.AddRange(mp);
            //    context.Toys.AddRange(toys);
            //    context.Customers.AddRange(customers);
            //    context.Addresses.AddRange(addresses);
            //    context.Orders.AddRange(orders);
            //    context.OrderToys.AddRange(orderToys);
            //    context.SaveChanges();
            //    Console.WriteLine("data added");
            //}

            int ch;
            bool endApp = false;

            while (endApp == false)
            {
                Console.WriteLine("Enter 1 for Adding new Customer");
                Console.WriteLine("Enter 2 for Updating a particular Customer");
                Console.WriteLine("Enter 3 for Deleting a particular Customer");
                Console.WriteLine("Enter 4 to view all Customers");
                Console.WriteLine("Enter 5 to place an order");
                Console.WriteLine("Enter 6 to exit");
                Console.Write("Enter your choice : ");
                ch = Convert.ToInt32(Console.ReadLine());

                switch (ch)
                {
                    case 1:
                        AddCustomer addCustomer = new AddCustomer();
                        addCustomer.Add();
                        break;
                    case 2:
                        UpdateCustomer updateCustomer = new UpdateCustomer();
                        updateCustomer.Update();
                        break;
                    case 3:
                        DeleteCustomer deleteCustomer = new DeleteCustomer();
                        deleteCustomer.Delete();
                        break;
                    case 4:
                        DisplayCustomer displayCustomer = new DisplayCustomer();
                        displayCustomer.Display();
                        break;
                    case 5:
                        PlaceOrder placeOrder = new PlaceOrder();
                        placeOrder.Order();
                        break;
                    case 6:
                        endApp = true;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
