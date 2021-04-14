using System;
using System.Collections.Generic;

namespace RentalBikes
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Dictionary<string, MoBike> Records = new Dictionary<string, MoBike>();
            Console.WriteLine("Rembo Rental Bikes System");
            Console.WriteLine();
            while (true)
            {
                Console.WriteLine("Enter 1 to Add the Bike and Customer Details");
                Console.WriteLine("Enter 2 to Delete the Record");
                Console.WriteLine("Enter 3 to Edit the Record");
                Console.WriteLine("Enter 4 to Search record");
                Console.WriteLine("Enter 5 to Display all the records");
                Console.WriteLine("Enter anything else to exit");

                string choice = Console.ReadLine();
                if (choice == "1")
                {
                    MoBike r = new MoBike();
                    r.input();
                    Records.Add(r.Name, r);

                }else if (choice == "2")
                {
                    Console.WriteLine("Enter the name of customer whoes record you want to delete");
                    string dRecord = Console.ReadLine();
                    if (Records.ContainsKey(dRecord))
                    {
                        Records.Remove(dRecord);
                        Console.WriteLine($"Record for {dRecord} removed successfully");
                    }
                    else
                    {
                        Console.WriteLine($"No records found for {dRecord}");
                    }

                }else if (choice == "3")
                {
                    Console.WriteLine("Enter the name of customer whoes record you want to edit");
                    string eRecord = Console.ReadLine();
                    if (Records.ContainsKey(eRecord))
                    {
                        Records.Remove(eRecord);
                        MoBike r = new MoBike();
                        r.input();
                        Records.Add(r.Name, r);
                    }
                    else
                    {
                        Console.WriteLine($"No records found for {eRecord}");
                    }
                }
                else if (choice == "4")
                {
                    Console.WriteLine("Enter the name of customer whoes record you want to search");
                    string sRecord = Console.ReadLine();
                    if (Records.ContainsKey(sRecord))
                    {
                        Console.WriteLine("Bike No.\tPhone No.\tNo. of Days\tCharge");
                        Records[sRecord].display();
                    }
                    else
                    {
                        Console.WriteLine($"No records found for {sRecord}");
                    }

                }
                else if (choice == "5")
                {
                    Console.WriteLine("Bike No.\tPhone No.\tNo. of Days\tCharge");
                    foreach (var item in Records)
                    {
                        
                        item.Value.display();
                    }
                }
                else
                {
                    break;
                }
            }
        }
    }
}
