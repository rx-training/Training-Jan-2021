using System;
using System.Collections.Generic;

namespace TaskPractices
{
    class Program
    {
        static void Main(string[] args)
        {   //prac 1
            Console.WriteLine("no. of Student you want to add in list");
            int n = Convert.ToInt32(Console.ReadLine());

            List<string> myList = new List<string>();

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("Add Name {0} into list", i + 1);
                myList.Add(Console.ReadLine());
            }
            Console.WriteLine();
            Console.WriteLine("Student Names-----");
            foreach (string item in myList)
            {
                Console.WriteLine(item);

            }
            Console.WriteLine("Enter Name and get Index");
            string data = Console.ReadLine();
            Console.WriteLine("Index of {0} is {1} ", data, myList.IndexOf(data));

            ////prc 2
            Console.WriteLine("no. of person age you want to add stack");
            int n1 = Convert.ToInt32(Console.ReadLine());

            var ageOfPerson = new Stack<int>();
            for (int i = 0; i < n1; i++)
            {
                Console.WriteLine("Add Age of person {0} into list", i + 1);
                ageOfPerson.Push(Convert.ToInt32(Console.ReadLine()));
            }
            Console.WriteLine("last in first out oerder");
            foreach (int item in ageOfPerson)
            {
                Console.Write(item + ", ");
            }
            Console.WriteLine();
            Console.WriteLine("pop data");
            for (int i = 0; i < n1; i++)
            {
                Console.Write(ageOfPerson.Pop() + ", ");
            }
            Console.WriteLine();


            //prac 3

            Console.WriteLine();

            Console.WriteLine("no. of product data you want to add in dictionary");
            int n2 = Convert.ToInt32(Console.ReadLine());

            Dictionary<string, int> map = new Dictionary<string, int>();
            for (int i = 0; i < n2; i++)
            {
                Console.WriteLine("enter productName and price of product");
                map.Add(Convert.ToString(Console.ReadLine()), Convert.ToInt32(Console.ReadLine()));
            }
            Console.WriteLine("All product is");
            foreach (var item in map)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("key and value of All product is:");
            foreach (var item in map)
            {
                Console.WriteLine(item.Key+ "  "+ item.Value);
            }
            Console.WriteLine();
            Console.WriteLine("Enter Product name and get its key");
            Console.WriteLine("vale is :"+ map[Convert.ToString( Console.ReadLine())]);
        }
    }
}
