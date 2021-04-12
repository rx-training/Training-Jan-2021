using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Practice1
{
    //Create user defined class in list
    public class Colors
    {
        public int ColorCode { get; set; }
        public string ColorName { get; set; }
    }
    public class Customer
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            //Collections
            //Array List
            //Add
            ArrayList Values = new ArrayList();
            Values.Add("Rita");
            Values.Add("Reena");
            //Index Of
            Values.IndexOf(0);
            //Remove
            Values.RemoveAt(0);
            foreach(var value in Values)
            {
                Console.WriteLine(value);
            }
            //Sort
            Values.Sort();
            foreach (var value in Values)
            {
                Console.WriteLine(value);
            }
            //Clear
            Values.Clear();
            //Collections
            var Students = new List<string>();
            Students.Add("Neha");
            Students.Add("Pooja");
            Students.Add("Mukesh");
            foreach(var Student in Students)
            {
                Console.Write(Student + " ");
            }
            Console.WriteLine();
            //Contains
            Console.WriteLine(Students.Contains("Neha"));
            //Search
            Console.WriteLine("Enter name you want to find:");
            var search = Console.ReadLine();
            for(int i=0;i<Students.Count;i++)
            {
                if(Students[i].Equals(search))
                {
                    Console.WriteLine($"Found {Students[i]} At Index {i}");
                }
            }
            //Collection Initalizer
            Students = new List<string> { "Neha","Mukesh","Pooja"};
            foreach(var Student in Students)
            {
                Console.Write(Student+" ");
            }
            Console.WriteLine();
            //Collection Initalizer using for loop
            Students = new List<string> { "Neha", "Mukesh", "Pooja" };
            //Remove Element
            Students.Remove("Neha");
            for(int i = 0;i<Students.Count;i++)
            {
                Console.Write(Students[i]+" ");
            }
            //RemoveAt
            var Numbers = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            for (int i = Numbers.Count - 1; i >= 0; i--)
            {
                if(i %2 == 1)
                {
                    Numbers.RemoveAt(i);
                }
            }
            Numbers.ForEach(
                number => Console.WriteLine(number + " ")
                ) ;
            //Using user defined class in list
            var ColorsList = new List<Colors>
            {
                new Colors() { ColorCode = 101,ColorName = "Green"},
                new Colors() { ColorCode = 102,ColorName = "Yellow"},
                new Colors() { ColorCode = 103,ColorName = "Gray"}
            };
            foreach(var Color in ColorsList)
            {
                Console.WriteLine(Color.ColorCode+" " +Color.ColorName);
            }
            //Stack
            Stack Stack1 = new Stack();
            //Push

            Stack1.Push(10);
            Stack1.Push(20);
            Stack1.Push(30);
            Stack1.Push(40);
            Stack1.Push(50);
            Stack1.Push(10.4);
            Stack1.Push("abc");
            Stack1.Push("abc");
            Stack1.Push(false);
            Stack1.Push(null);

            foreach (var value in Stack1)
            {
                Console.WriteLine("Stack value is:" + value);
            }

            //Count
            Console.WriteLine(Stack1.Count);

            //Peek
            Console.WriteLine($"Peek of the stack is:{Stack1.Peek()}");
            //Pop
            Console.WriteLine($"Popped Element is:{Stack1.Pop()}");
            Console.WriteLine($"Peek of the stack is:{Stack1.Peek()}");
            //Contains
            Console.WriteLine(Stack1.Contains(20));
            //Clear elements of stack
            Stack1.Clear();
            Console.WriteLine(Stack1.Contains(20));
            //Stack in Collections
            Stack<string> Name = new Stack<string>();
            Name.Push("Neha");
            Name.Push("Rita");
            Name.Push("Reena");
            Name.Push("Vaishali");
            Name.Push("Bina");
            Name.Push("Pooja");
            //Count
            Console.WriteLine(Name.Count());
            Console.WriteLine("Names are:");
            foreach (var name in Name)
            {
                Console.WriteLine(name);
            }
            //Peek
            Name.Peek();
            //Pop
            Name.Pop();
            //Search
            Console.WriteLine(Name.Contains("Pooja"));
            //Index
            Console.WriteLine(Name.ElementAt(0));
            //Remove
            
            //Clear
            Name.Clear();
           
            //Queue
            Queue Names = new Queue();
            //Enqueue
            Names.Enqueue("abc");
            Names.Enqueue("xyz");
            Names.Enqueue("pqr");
            //Count
            
            //Dequeue
            Names.Dequeue();
            //Peek
            Names.Peek();
            //Clear
            Names.Clear();
            //Queue in Collections
            Queue<string> names = new Queue<string>();
            //Enqueue
            names.Enqueue("Neha");
            names.Enqueue("Bina");
            names.Enqueue("Reena");
            names.Enqueue("Rita");
            names.Enqueue("Meena");
            foreach(var value in names)
            {
                Console.WriteLine(value);
            }
            //Dequeue
            Console.WriteLine(names.Dequeue());
            Console.WriteLine("Queue after Dequeue");
            foreach (var value in names)
            {
                Console.WriteLine(value);
            }
            Console.WriteLine("Peeked element from queue");
            //Peek
            Console.WriteLine(names.Peek());
            //Clear
            names.Clear();
            //Dictionary
            Customer c = new Customer()
            {
                ID = 101,
                Name = "John",
                Salary = 5000
            };
            Customer c1 = new Customer()
            {
                ID = 102,
                Name = "Rita",
                Salary = 6000
            };
            Customer c2 = new Customer()
            {
                ID = 103,
                Name = "Reena",
                Salary = 3500
            };
            Dictionary<int, Customer> DictionaryCustomers = new Dictionary<int, Customer>();
            DictionaryCustomers.Add(c.ID,c);
            DictionaryCustomers.Add(c1.ID, c1);
            DictionaryCustomers.Add(c2.ID, c2);

            //Search from Dictionary
            Customer customer101 = DictionaryCustomers[101];
            Console.WriteLine($"Customer Id is {customer101.ID},Name is: {customer101.Name},Salary is: {customer101.Salary}");

            foreach(KeyValuePair<int,Customer> CustomerKeyValuePair in DictionaryCustomers)
            {
                Console.WriteLine($"customer Key is:{CustomerKeyValuePair.Key}");
                Customer cust = CustomerKeyValuePair.Value;
                Console.WriteLine($"Customer Id is : {cust.ID}, Name is : {cust.Name},Salary is:{cust.Salary}");
            }
            //Contains
            if(!DictionaryCustomers.ContainsKey(104))
            {
                DictionaryCustomers.Add(104, c2);
            }
            foreach (KeyValuePair<int, Customer> CustomerKeyValuePair in DictionaryCustomers)
            {
                Console.WriteLine($"customer Key is:{CustomerKeyValuePair.Key}");
                Customer cust = CustomerKeyValuePair.Value;
                Console.WriteLine($"Customer Id is : {cust.ID}, Name is : {cust.Name},Salary is:{cust.Salary}");
            }
        }
    }
}
