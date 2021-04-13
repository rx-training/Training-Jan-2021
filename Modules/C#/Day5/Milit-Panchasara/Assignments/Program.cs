using System;
using System.Collections.Generic;

namespace Assignments
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome");
            List<Mobike> customers = new List<Mobike>();
            while (true)
            {
                Console.WriteLine();
                Console.WriteLine("Press a to add Customer entry, \nPress f to find details of customer, \nPress s to display all customers, \nPress d to delete customer entry, \nPress e to edit customer entry, \nPress any other key to exit.");
                char type = Console.ReadLine()[0];
                if (type == 'a')
                {
                    Mobike newCustomer = new Mobike();
                    newCustomer.Input();
                    customers.Add(newCustomer);
                }
                else if (type == 'f')
                {
                    Mobike result = Search(customers);
                    if (result != null)
                    {
                        result.Display(true);
                    }
                    else
                    {
                        Console.WriteLine("Cannot find any customer with given bike number.");
                    }
                }
                else if (type == 's')
                {
                    bool showHeader = true;
                    foreach (var customer in customers)
                    {
                        if(showHeader)
                        {
                            customer.Display(true);
                            showHeader = false;
                        }
                        else
                        {
                            customer.Display();
                        }
                    }
                }
                else if (type == 'd')
                {
                    Delete(customers);
                }
                else if (type == 'e')
                {
                    Edit(customers);
                }
                else
                {
                    break;
                }
            }
        }

        private static void Edit(List<Mobike> customers)
        {
            Console.WriteLine("Enter bike number rented by the customer: ");
            var number = Console.ReadLine();
            while (string.IsNullOrWhiteSpace(number))
            {
                Console.WriteLine("Enter bike number rented by the customer: ");
                number = Console.ReadLine();
            }
            var customer = customers.Find(c => c.BikeNumber == number);
            if (customer != null)
            {
                customer.Input();
                Console.WriteLine("Customer details updated successfully.");
                return;
            }
            Console.WriteLine("Cannot find any customer with given bike number.");
            return;
        }

        private static Mobike? Search(List<Mobike> customers)
        {
            Console.WriteLine("Enter bike number rented by the customer: ");
            var number = Console.ReadLine();
            while (string.IsNullOrWhiteSpace(number))
            {
                Console.WriteLine("Enter bike number rented by the customer: ");
                number = Console.ReadLine();
            }
            var customer = customers.Find(c => c.BikeNumber == number);
            if (customer != null)
            {
                return customer;
            }
            return null;
        }
        private static void Delete(List<Mobike> customers)
        {
            Console.WriteLine("Enter bike number rented by the customer: ");
            var number = Console.ReadLine();
            while (string.IsNullOrWhiteSpace(number))
            {
                Console.WriteLine("Enter bike number rented by the customer: ");
                number = Console.ReadLine();
            }
            var customer = customers.Find(c => c.BikeNumber == number);
            if (customer != null)
            {
                customers.Remove(customer);
                Console.WriteLine("Record removed successfullly.");
                return;
            }
            Console.WriteLine("Cannot find any customer with given bike number.");
            return;
        }
    }
}
