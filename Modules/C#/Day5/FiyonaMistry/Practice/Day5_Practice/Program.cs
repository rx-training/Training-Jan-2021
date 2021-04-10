using System;
using System.Collections.Generic;

namespace Day5_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            // 1. Create a list which will store 5 student names and then display it search it index number
            var student = new List<string>();

            for (int i = 1; i <= 5; i++)
            {
                Console.Write("Enter {0} student's name : ", i);
                student.Add(Console.ReadLine());
            }

            for (int index = 0; index < student.Count; index++)
            {
                Console.WriteLine(student[index]);
            }


            // 2. Create a stack which will store Age of person and display it last in first out order.
            Stack<int> age = new Stack<int>();

            for (int i = 1; i <= 5; i++)
            {
                Console.Write("Enter {0} person's age : ", i);
                age.Push(Convert.ToInt32(Console.ReadLine()));
            }

            foreach (int item in age)
            {
                Console.WriteLine(item);
            }

            // 3. Store a product information in map object. Key will be a product item and value will be the price of that product. Search the product by product name.
            Dictionary<string, double> product = new Dictionary<string, double>();
            string search;
            double value; 

            product.Add("ABC", 30.5);
            product.Add("PQR", 35.5);
            product.Add("XYZ", 45.6);

            foreach (KeyValuePair<string, double> i in product)
            {
                Console.WriteLine("Key = {0}, Value = {1}",
                    i.Key, i.Value);
            }

            Console.Write("Search for a product : ");
            search = Console.ReadLine();

            if (product.TryGetValue(search, out value))
            {
                Console.WriteLine("Value for the product searched : " + value);
            }
        }
    }
}
