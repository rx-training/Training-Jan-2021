using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFAssignment_Day12.Models;
using Microsoft.EntityFrameworkCore;

namespace EFAssignment_Day12
{
    public class PlaceOrder
    {
        public void Order()
        {
            DisplayState displayState = new DisplayState();

            Console.WriteLine();

            Console.WriteLine("Toy Table : ");
            DisplayToys displayToys = new DisplayToys();
            displayToys.Display();

            Console.WriteLine("Customer Table : ");
            DisplayCustomer displayCustomer = new DisplayCustomer();
            displayCustomer.Display();

            Console.WriteLine("Address Table : ");
            DisplayAddress displayAddress = new DisplayAddress();
            displayAddress.Display();

            List<int> idList = new List<int>();
            int id;

            Console.Write("Number of Toys to order : ");
            int count = Convert.ToInt32(Console.ReadLine());

            for (int i = 0; i < count; i++)
            {
                Console.Write($"Toy Id {i+1} : ");
                id = Convert.ToInt32(Console.ReadLine());
                idList.Add(id);
            }

            Console.Write("Enter Customer Id : ");
            int custId = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Address Id : ");
            int addId = Convert.ToInt32(Console.ReadLine());

            using (var context = new ToyManufacturingContext())
            {
                double totalPrice = 0.00;

                // Adding Price
                foreach (var item in idList)
                {
                    var price = context.Toys.Where(t => t.ToyId == item).Select(t => t.Amount);
                    foreach (double item2 in price)
                    {
                        Console.WriteLine(item2);
                        totalPrice += item2;
                    }
                }

                var add = new Orders() { OrderDate = System.DateTime.Now, Items = count, Price = totalPrice, CustId = custId, AdId = addId};
                context.Orders.Add(add);

                // Displays State of Entity
                displayState.State(context.ChangeTracker.Entries());

                context.SaveChanges();

                var scheme = context.Orders.FromSqlRaw($"exec Scheme {totalPrice}").ToList();
                Console.WriteLine("Scheme on order : ");
                foreach (var item in scheme)
                {
                    Console.WriteLine($"Order Id : {item.OrderId}, Price : {item.Price}");
                }

                Console.WriteLine();
            }
        }
    }
}