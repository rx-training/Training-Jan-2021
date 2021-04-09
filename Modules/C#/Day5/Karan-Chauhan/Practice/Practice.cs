using System;
using System.Collections;
using System.Collections.Generic;

namespace Practice
{
    class Student
    {
        public void Display()
        {
            List<string> name = new List<string>();
            name.Add("Karan");
            name.Add("Jay");
            name.Add("Bhargav");
            name.Add("Parth");
            name.Add("Yash");
            name.Sort();
            Console.WriteLine("Enter the name: ");
            string n = Console.ReadLine();
            int index = name.BinarySearch(n);
            Console.WriteLine("Index is " + index);

        }
    }

    class Age
    {
        public void Display()
        {
            Stack<int> age = new Stack<int>();
            age.Push(45);
            age.Push(30);
            age.Push(22);
            age.Push(46);
            age.Push(54);


            Console.WriteLine("Last In First Out :");
            while(age.Count > 0)
            {
                int temp = age.Pop();
                Console.WriteLine(temp);
            }

        }
    }

    class Product
    {
        public void Display()
        {
            Dictionary<string,int> map = new Dictionary<string, int>();
            map.Add("Cake",300);
            map.Add("Icecream", 50);
            map.Add("Pizza", 600);
            map.Add("Colddrink", 70);

            Console.WriteLine("Enter the Product Name to know the price :");
            Console.WriteLine("1)Cake 2)Icecream 3)Pizza 4)Colddrink");
            string product = Console.ReadLine();
            foreach(KeyValuePair<string,int> temp in map)
            {
                if(temp.Key == product)
                {
                    Console.WriteLine("Product Name : "+product);
                    Console.WriteLine("Price : " + temp.Value);
                }
            }
        }
    }

    class QueueExample
    {
        public void Display()
        {
            Queue<int> marks = new Queue<int>();
            marks.Enqueue(10);
            marks.Enqueue(20);
            marks.Enqueue(30);
            marks.Enqueue(40);
            marks.Enqueue(50);

            int len = marks.Count;
            Console.WriteLine("Number of Elements in Queue : " + len);

            bool result = marks.Contains(30);
            Console.WriteLine("Contains Example - 30 :" + result);

            Console.WriteLine("Elements of Queue - First In First Out: ");
            while(marks.Count>0)
            {
                int temp = marks.Dequeue();
                Console.WriteLine(temp);
            }
        }
    }

    class ArrayListExample
    {
        public void Display()
        {
            ArrayList items = new ArrayList();
            items.Add("Laptop");
            items.Add(55);
            items.Add(40.55);
            items.Add("Mobile");
            items.Add('C');

            foreach (var temp in items)
            {
                Console.WriteLine(temp);
            }
            
            Console.WriteLine("Index of 55: " + items.IndexOf(55));
            items.Insert(1,"Cake");
            items.Remove(55);

            items.Reverse();
            Console.WriteLine("Reverse Items : ");
            foreach (var temp in items)
            {
                Console.WriteLine(temp);
            }




        }
    }
    class Practice
    {
        static void Main(string[] args)
        {
            Student s = new Student();
            s.Display();
            Age a = new Age();
            a.Display();
            Product p = new Product();
            p.Display();
            QueueExample q = new QueueExample();
            q.Display();
            ArrayListExample obj = new ArrayListExample();
            obj.Display();
            Console.ReadKey();
        }
    }
}
