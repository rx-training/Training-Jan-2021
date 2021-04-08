using System;
using System.Collections.Generic;

namespace Day5Assignment
{
    class Day5AssignmentTask
    {
        static void Main(string[] args)
        {
            bool moreChoice = true;
            Mobike mobike = new Mobike();
            while (moreChoice)
            {
                Console.WriteLine("Choose from below options:");
                Console.WriteLine("a: Adding Customer information");
                Console.WriteLine("d: Displaying all customer's info");
                Console.WriteLine("s: search for a particular customer");
                Console.WriteLine("u: Update customer's info");
                Console.WriteLine("r: Remove customer's info");

                char choice = Convert.ToChar(Console.ReadLine());
                switch (choice)
                {
                    case 'a':
                        mobike.Input();
                        break;
                    case 'd':
                        mobike.Display();
                        break;
                    case 's':
                        mobike.SearchCustomer();
                        break;
                    case 'u':
                        mobike.UpdateCustomer();
                        break;
                    case 'r':
                        mobike.DeleteCustomer();
                        break;
                    default:
                        Console.WriteLine("Enter correct choice!");
                        break;
                }

                Console.WriteLine("Want to perform more actions? (Y/N)");
                char more = Convert.ToChar(Console.ReadLine());
                if (more == 'Y')
                {
                    moreChoice = true;
                }
                else
                {
                    moreChoice = false;
                }
            }

        }
    }
}
