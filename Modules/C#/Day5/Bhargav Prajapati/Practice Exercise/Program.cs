using System;
using System.Collections;
using System.Collections.Generic;
namespace Practice_Exercise
{
    class ArrayListCollection
    {
        public void listarray()
        { 
        //declaration of array list And Add the items
        ArrayList arr1 = new ArrayList();
            arr1.Add("Hello");
            arr1.Add("World");
            Console.WriteLine("Enter  Value :-");
            arr1.Add(Console.ReadLine());

            foreach (var item in arr1)
            {
                Console.WriteLine(item);
            }

            var arr2 = new ArrayList() { 2,"Steve"," ",true,4.5,null};

            foreach (var item in arr2)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();

            //add Range Method
            Console.WriteLine("Addrange Method");
            int[] arr = { 100, 200, 300, 400 };

            Queue myQ = new Queue();
            myQ.Enqueue("Hello");
            myQ.Enqueue("World!");
            arr1.AddRange(arr);
            arr1.AddRange(myQ);

            foreach (var item in arr1)
            {

                Console.WriteLine(item);
            }

            //Insert Elelmet in array list
            Console.WriteLine();
            Console.WriteLine("Insert Method :--");
            arr1.Insert(1,"How");
            arr1.Insert(2, "Are");
            arr1.Insert(3,"You");


            foreach (var item in arr1)
            {

                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("Remove Method");
            //arr1.Remove(null); 
            //arr1.RemoveAt(4);
            arr1.RemoveRange(0, 2);
            foreach (var item in arr1)
            {

                Console.WriteLine(item);
            }

        }

        
    }
    class Car
    {
        public string Name { get; set; }
        public string Color { get; set; }
        public int Speed { get; set; }

        public void Display()
        {
            Console.WriteLine($"Name :-  {Name}");
            Console.WriteLine($"Color :- {Color}");
            Console.WriteLine($"Speed :- {Speed}");
            Console.WriteLine("==============================");
        }
    }
    class ListExample
    {
        
        public void UnderstandList()
        {
            /*Adding the element in list objec*/
            List<int> PrimeNumber = new List<int>();
            PrimeNumber.Add(1);
            PrimeNumber.Add(3);
            PrimeNumber.Add(5);
            PrimeNumber.Add(7);

            Console.WriteLine("Print The Prime Number Using List Of Add Method");
            foreach (int item in PrimeNumber)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("Name OF The City");
            List<string> city = new List<string> { "Delhi","Mumbai","Ahmedabad","Banglore","Pune" };
            foreach (var item in city)
            {
                Console.WriteLine(item);
            }

            //Add The Data member using another way
            Console.WriteLine();

            var cars = new List<Car>
            {
                { new Car() { Name = "car1", Color = "blue", Speed = 20}},
                { new Car() { Name = "car2", Color = "red", Speed = 50}},
                { new Car() { Name = "car3", Color = "green", Speed = 10}},
                { new Car() { Name = "car4", Color = "blue", Speed = 50}},
                { new Car() { Name = "car5", Color = "blue", Speed = 30}},
                { new Car() { Name = "car6", Color = "red", Speed = 60}},
                { new Car() { Name = "car7", Color = "green", Speed = 50}}
               
            };

            foreach (var item in cars)
            {
                item.Display();
            }

            Console.WriteLine();
            Console.WriteLine("Insert Method");
            //Insert Method
            var numbers = new List<int>() { 10, 20, 30, 40 };
            numbers.Insert(1, 11);
            foreach (var num in numbers)
                Console.Write(num);

            // Remove  Method
            Console.WriteLine();
            Console.WriteLine("Remove Method");
            var numbers1 = new List<int>() { 10, 20, 30, 40, 10 };
            numbers1.Remove(10); 
            numbers1.RemoveAt(2); 
            foreach (var el in numbers1)
                Console.Write(el); 

        }
    }

    class UnderstandingStack
    {
        public void stackLearning()
        {
            Console.WriteLine("Stack is Followed By Last In Last Out Order [LIFO]");
            //declare the stack object
            Stack<int> mystack = new Stack<int>();
            Console.WriteLine();
            Console.WriteLine("Push The Element");
            mystack.Push(1);
            mystack.Push(2);
            mystack.Push(3);
            mystack.Push(4);
            mystack.Push(5);

            foreach (var item in mystack)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
            Console.WriteLine("Pop The Element");
            mystack.Pop();
            foreach (var item in mystack)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("Number Of Element in  Stack Is :-" + mystack.Count);


        }
    }

    class UnderstandingQueue
    {
        public void LearningQueue()
        {
            Console.WriteLine("Queue Is Followed BY First In First Out [FIFO] ORDER ");

            Console.WriteLine("Add The Data IN Queue");
            Queue<char> vowel = new Queue<char>();
            vowel.Enqueue('A');
            vowel.Enqueue('E');
            vowel.Enqueue('I');
            vowel.Enqueue('O');
            vowel.Enqueue('U');

            foreach (var item in vowel)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("Delete The Data IN Queue");
            vowel.Dequeue();
            vowel.Dequeue();
            foreach (var item in vowel)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("Number Of Element in QUEUE Is :-" + vowel.Count);


        }
    }

    class UnderStandingDictionary
    {
        public void LearnDictionary()
        {
            IDictionary<int, string> myDictionary = new Dictionary<int, string>();
            myDictionary.Add(1, "One");
            myDictionary.Add(2, "Two");
            myDictionary.Add(3,"Three");
            myDictionary.Add(4, "Four");
            myDictionary.Add(5,"Five");

            foreach (KeyValuePair<int,string> kvp in myDictionary)
            {
                Console.WriteLine($"Key :- {kvp.Key}   Value :- {kvp.Value}");
            }

            Console.WriteLine();
            Console.WriteLine("Other Example");
            Dictionary<string, string> City = new Dictionary<string, string>()
            {
                 {"UK", "London, Manchester, Birmingham"},
                 {"USA", "Chicago, New York, Washington"},
                 {"India", "Mumbai, New Delhi, Pune"}
            };
            foreach (KeyValuePair<string, string> kvp in City)
            {
                Console.WriteLine($"Key :- {kvp.Key}   Value :- {kvp.Value}");
            }
            Console.WriteLine(City["UK"]); 
            Console.WriteLine(City["USA"]);

            // update value of UK key
            Console.WriteLine();
            Console.WriteLine("Update The Record");
            City["UK"] = "Liverpool, Bristol";             
            City["USA"] = "Los Angeles, Boston";

            foreach (KeyValuePair<string,string> kvp in City)
            {
                Console.WriteLine($"Key :- {kvp.Key}      Value :- {kvp.Value}");
            }
        }
    }


    class Exercise
    {
        
        
        
        
        public void Practice()
        {
            /*1. Create a list which will store 5 student names and then display it search it index number*/

            List<string> name = new List<string>();
            Console.WriteLine("Enter number Of Length You Want to add");
            int len = Convert.ToInt32(Console.ReadLine());
            
            for (int i = 0; i < len; i++)
            {
                Console.WriteLine($"Enter {i+1} Name :-");
                name.Add(Console.ReadLine());
            }
            Console.WriteLine("Enter The Name You Want To  search The  Index ");
            string n = Console.ReadLine();
            int index = name.BinarySearch(n);
            Console.WriteLine("Index is :-" + (index+1));

            /*2. Create a stack which will store Age of person and display it last in first out order.*/
            int[] age = new int[5];
            Stack<int> myage = new Stack<int>();
            for (int i = 0; i < 5; i++)
            {

                Console.WriteLine("Enter The Age");
                age[i] = Convert.ToInt32(Console.ReadLine());
                myage.Push(age[i]);
            }
            Console.WriteLine("Push Operation are Perfomed");
            foreach (var item in myage)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("Pop Operation are Perfomed");
            for (int j = 0; j < 5; j++)
            {
                Console.WriteLine(myage.Pop());
            }

            /*. Store a product information in map object. Key will be a product item and value will be 
              the price of that product.  Search the product by product name.*/

            Dictionary<string, int> products = new Dictionary<string, int>()
            {
                { "Computer",5000 },
                { "Mouse",500},
                { "KeyBord",2500},
                { "RAM",4000}
            };

            Console.WriteLine("Enter The Product Name :-");
            string name1= Console.ReadLine();

            foreach(KeyValuePair<string,int> kvp in products)
            { 
            if (name1==kvp.Key)
            {
                Console.WriteLine($"The {kvp.Key} Price Is {kvp.Value} RS");
            }
           
            }
            

        }

    }




    class Program
    {
        static void Main(string[] args)
        {
            /*ArrayListCollection a1 = new ArrayListCollection();
            a1.listarray();

           ListExample l1 = new ListExample();
           l1.UnderstandList();
           UnderstandingStack us = new UnderstandingStack();
           us.stackLearning();

           UnderstandingQueue uq = new UnderstandingQueue();
           uq.LearningQueue();

           UnderStandingDictionary ud = new UnderStandingDictionary();
           ud.LearnDictionary();*/

            Exercise e1 = new Exercise();
            e1.Practice();
            
        }
    }
}
