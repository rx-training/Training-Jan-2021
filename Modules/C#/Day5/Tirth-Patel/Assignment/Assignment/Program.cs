using System;
using System.Collections.Generic;

namespace Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Mobike> Customers = new List<Mobike>();
            while (true)
            {
                Console.WriteLine("\nConsole MobikeApp in c#:/r");
                Console.WriteLine("-----------------\n");
                //ask user to enter numbers
                Console.WriteLine("Type 'A' To add Customer");
                Console.WriteLine("Type 'R' To Remove Customer");
                Console.WriteLine("Type 'D' To Display Customer");
                Console.WriteLine("Type 'U' To Update Customer");
                Console.WriteLine("Type 'E' To Exit");

                Console.Write("Your option? ");
                char c = Convert.ToChar(Console.ReadLine());

                switch (c)
                {

                    case 'A':
                        try
                        {
                            Mobike Cus = new Mobike();
                            Cus.input();
                            Cus.Compute();
                            Customers.Add(Cus);
                        }
                        catch (CustomException e)
                        {
                            Console.WriteLine(e.Message);
                        }
                        continue;

                    case 'R':
                        if (Customers.Count == 0)
                        {
                            Console.WriteLine("Customer List is Empty");
                        }
                        else
                        {
                            Console.WriteLine("Enter customer name to delete his Entry");
                            string name = Console.ReadLine();
                            var Remove = Customers.Find(Mobike => Mobike.Name == name);
                            if(Remove == null)
                            {
                                Console.WriteLine("Cutomer Not Found:");
                            }
                            else {
                            Customers.Remove(Remove);
                                Console.WriteLine("Cutomer Deleted");
                            }

                        }
                        continue;
                    case 'D':
                        if (Customers.Count <= 0)
                        {
                            Console.WriteLine("Customer List is Empty");
                        }
                        else
                        {
                            Console.WriteLine("Enter Customer Name to Display his Info");
                            string name = Console.ReadLine();
                            var Display = Customers.Find(Mobike => Mobike.Name == name);
                            
                            if (Display == null)
                            {
                                Console.WriteLine("Cutomer Not Found:");
                            }
                            else
                            {
                                Console.WriteLine("Customer Data:\r");
                                Display.Display();
                            }
                            
                        }
                        continue;
                    case 'U':
                        if (Customers.Count <= 0)
                        {
                            Console.WriteLine("Customer List is Empty");
                        }
                        else
                        {
                            Console.WriteLine("Enter Customer Name to update his details");
                            string name = Console.ReadLine();
                            var Display = Customers.Find(Mobike => Mobike.Name == name);

                            if (Display == null)
                            {
                                Console.WriteLine("Customer Not Found:");
                            }
                            else
                            {
                               
                                Display.Display();
                                Console.WriteLine("Enter the latest Date you want to update");
                                DateTime latest = Convert.ToDateTime(Console.ReadLine());
                                Customers.Find(Mobike => Mobike.Name == name).Date = latest;
                                Customers.Find(Mobike => Mobike.Name == name).Compute();
                                Console.WriteLine("date updated!");

                            }

                        }
                        continue;
                    case 'E':
                        break;
                }
                break;

            }

        }
    }
}
