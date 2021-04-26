using System;
using Assignment.Models;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            var db = new ToyDBContext();

            while(true)
            {
                Console.WriteLine("Enter 1 to see the toys");
                Console.WriteLine("Enter 2 to search the record");
                Console.WriteLine("Enter 3 to place an order");
                Console.WriteLine("Enter anything else to exit");
                var choice = Console.ReadLine();
                switch (choice)
                {
                    case "1":
                        Console.WriteLine("");
                        Console.WriteLine("Toy Name\tPrice");
                        foreach (var item in db.Toys)
                        {
                            Console.WriteLine($"{item.ToyName}\t{item.Price}");
                        }
                        break;
                    case "2":
                        Console.WriteLine(" ");
                        Console.WriteLine("Enter the name of Toy");
                        var toyName = Console.ReadLine();
                        foreach (var item in db.Toys)
                        {
                            if (item.ToyName == toyName)
                            {
                                Console.WriteLine($"{item.ToyName}\t{item.Price}\t{item.Quantity}\t{item.Plant.PlantName}");
                            }
                        }
                        break;
                    case "3":
                        Console.WriteLine(" ");
                        Console.WriteLine("Enter the Toy name that you want to buy");
                        var Name = Console.ReadLine();
                        var order = new Order { OrderItem = Name };
                        db.Orders.Add(order);
                        break;
                    default:
                        break;
                }
                    
            }
        }
    }
}
