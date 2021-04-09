using System;
using System.Collections.Generic;

namespace PracticeExe
{
    
    class Program
    {
        static void Main(string[] args)
        {
            //Question 1
            List<string> students = new List<string>();

            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Enter name of student {i+1}");
                students.Add(Console.ReadLine());
            }

            Console.WriteLine("Name of students are: ");
            foreach (var student in students)
            {
                Console.WriteLine(student);
            }

            Console.WriteLine("Enter the no. of student which you want to search");
            int j = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(students[j-1]);


            //Question 2
            Stack<int> ages = new Stack<int>();
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Enter the age of person {i+1}");
                ages.Push(Convert.ToInt32(Console.ReadLine()));
            }
            Console.WriteLine("Displaying Age of Persons in Last In First Out Manner");
            foreach (var age in ages)
            {
                Console.WriteLine(age);
            }

            //Question 3
            Dictionary<string, int> ProductInfo = new Dictionary<string, int>();
            Console.WriteLine("How many products do you want to enter ?");
            int count = Convert.ToInt32(Console.ReadLine());
            Maps[] p = new Maps[count];

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine("Enter the name of product {0}:",i+1);
                var name = Console.ReadLine();
                Console.WriteLine("Enter the price of product :");
                var cost = Convert.ToInt32(Console.ReadLine());
                p[i] = new Maps(name, cost);
            }

            foreach (var item in p)
            {
                ProductInfo.Add(item.Item, item.Price);
            }
            Console.WriteLine("Enter the product name which you want to search");
            string searchItem = Console.ReadLine();

            if (ProductInfo.ContainsKey(searchItem))
            {
                Console.WriteLine("Product\t\tPrice");
                Console.WriteLine($"{searchItem}\t\t{ProductInfo[searchItem]}");
            }
            else
            {
                Console.WriteLine($"No record for {searchItem} found");
            }

        }
    }
}
