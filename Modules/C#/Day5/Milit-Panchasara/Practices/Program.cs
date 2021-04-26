using System;
using System.Collections;
using System.Collections.Generic;

namespace Practices
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<int, string> dict = new Dictionary<int, string>();

            Tuple<int, string> tuple1 = new Tuple<int, string>(1, "Milit");
            Tuple<int, string> tuple2 = new Tuple<int, string>(2, "John");
            Tuple<int, string> tuple3 = new Tuple<int, string>(2, "XYZ");

            dict.Add(0, "ABC");
            dict.Add(tuple1.Item1, tuple1.Item2);
            dict.Add(tuple2.Item1, tuple2.Item2);
            Console.WriteLine(dict.TryAdd(tuple3.Item1, tuple3.Item2));
            foreach (var item in dict)
            {
                Console.WriteLine($"{item.Key}: {item.Value}");
            }

            List<string> list1 = new List<string>();
            list1.Add("x");
            list1.Add("y");
            list1.Add("z");

            List<string> list2 = new List<string>();
            list2.Add("1");
            list2.Add("2");
            list2.Add("3");


            SortedDictionary<int, List<string>> dict2 = new SortedDictionary<int, List<string>>();

            dict2.Add(1, list1);
            dict2.Add(2, list2);

            foreach (var item in dict2)
            {
                Console.WriteLine(item.Value.GetType());
                foreach (var i in item.Value)
                {
                    Console.WriteLine($"Key: {item.Key}, value in list {i}");
                }
            }

            Console.WriteLine(dict2.Count);
            Console.WriteLine(dict2.ContainsKey(2));
            Console.WriteLine(dict2.ContainsKey(3));
            Console.WriteLine(dict2.Remove(2));
            Console.WriteLine(dict2.Keys.GetType()); //list of keys

            ArrayList x = new ArrayList();

            x.Add(1);
            x.Add("M");

            foreach (var item in x)
            {
                Console.WriteLine(item);
            }

            Queue<string> q = new Queue<string>();

            q.Enqueue("item1");
            q.Enqueue("item2");
            Console.WriteLine(q.Dequeue());
            Console.WriteLine(q.Count);
            q.Clear();
            Console.WriteLine(q.Count);

            Stack<string> s = new Stack<string>();

            s.Push("item1");
            s.Push("item2");
            Console.WriteLine(s.Peek());
            Console.WriteLine(s.Pop());
            Console.WriteLine(s.Count);
            s.Clear();
            Console.WriteLine(s.Count);
            string str = String.Empty;
            Console.WriteLine(s.TryPeek(out str));
            Console.WriteLine(s.TryPop(out str));
            Console.WriteLine(s.GetEnumerator());
            Practice1();
            Practice2();
            Practice3();

        }

        private static void Practice3()
        {
            //------------//
            // Practice 3 //
            //------------//
            Dictionary<string, decimal> products = new Dictionary<string, decimal>();
            while (true)
            {
                Console.WriteLine("Enter product name");
                var key = Console.ReadLine();
                Console.WriteLine("Enter product price");
                var value = Convert.ToDecimal(Console.ReadLine());

                products.Add(key, value);
                Console.WriteLine("Press 1 to add more, any other key to stop inserting");
                if (Console.ReadLine() != "1")
                {
                    break;
                }
            }
            while (true)
            {
                Console.WriteLine("Enter product name to show it's price");
                var name = Console.ReadLine();
                if (products.ContainsKey(name))
                {
                    Console.WriteLine($"Price is {products[name]}");
                }
                else
                {
                    Console.WriteLine("Product not available");
                }
                Console.WriteLine("Press 1 to see more, any other key to exit");
                if (Console.ReadLine() != "1")
                {
                    break;
                }
            }
        }

        private static void Practice2()
        {
            //------------//
            // Practice 2 //
            //------------//
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Practice 2:");
            Console.WriteLine("Insert ages of 5 persons...");
            Stack<int> ages = new Stack<int>(5);

            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Enter Age: ");
                ages.Push(Convert.ToInt32(Console.ReadLine()));
            }

            while (ages.Count != 0)
            {
                Console.WriteLine($"Age: {ages.Pop()}");
            }
        }

        private static void Practice1()
        {
            //------------//
            // Practice 1 //
            //------------//
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("Practice 1:");
            List<string> students = new List<string>(5);
            Console.WriteLine(students.Capacity);
            for (int i = 0; i < students.Capacity; i++)
            {
                Console.WriteLine("Enter Name: ");
                students.Add(Console.ReadLine());
            }

            Console.WriteLine("Enter index to get name");
            Console.WriteLine(students[Convert.ToInt32(Console.ReadLine())]);
        }
    }
}
