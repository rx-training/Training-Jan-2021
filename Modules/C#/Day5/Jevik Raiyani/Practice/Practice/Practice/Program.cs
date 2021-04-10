using System;
using System.Collections;
using System.Collections.Generic;

namespace Practice
{

    public class State
    {
        public string Capital { get; set; }
        public int Population { get; set; }
        public int Size { get; set; }

        public State(string capital,int pop,int size)
        {
            Capital = capital;
            Population = pop;
            Size = size;
        }
        public static   Dictionary<string,State> GetStates()
        {
            var states = new Dictionary<string, State>();
            var theState = new State("Delhi", 15613, 123);
            states.Add("Delhi",theState);
            theState = new State("Gandhinagar", 15613, 11);
            states.Add("Gujarat", theState);

            return states;

        }
    }
    class Item
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public virtual void Parchase()
        {
            Console.WriteLine("purchaseing {0}",Name);
        }
        public static List<Item> GetItems(int numToGet)
        {
            var random = new Random();
            var newList = new List<Item>();
            Item newItem;
            for (int i = 0; i < numToGet; i++)
            {
                newItem = new Item() { ID = random.Next(), Name = "MyItem"+ i.ToString() };
                newList.Add(newItem);
            }
            
            return newList;  
        }

        //public Item(int id)
        //{
        //    ID = id;
        //}
    }

    //class Test<T>
    //{
    //    public void display(T value)
    //    {
    //        Console.WriteLine(value);
    //    }
    //}
    //class Person
    //{
    //    public int ID { get; set; }
    //    public string Name { get; set; }
    //    public string Address { get; set; }

    //    public override bool Equals(object obj)
    //    {
    //        Person person = obj as Person;
    //        if(base.Equals(obj) ||(this.ID ==person.ID && this.Name == person.Name && this.Address==person.Address))
    //        {
    //            return true;
    //        }
    //        else
    //        {
    //            return false;
    //        }
    //    }
    //    public override string ToString()
    //    {
    //        return $"id is {ID} NAme is {Name} Address is {Address}";
    //    }
    //}
    class Program 
    {
        static void Main(string[] args)
        {
            //var theStates = State.GetStates();
            //string capitaofgujarat = theStates["Gujarat"].Capital;
            //Console.WriteLine("The capital of Gujarat is {0}", capitaofgujarat);

            var theStates = State.GetStates();
            var theState = theStates["Gujarat"];
            Console.WriteLine($"The capital of  Gujarat is {theState.Capital}, its populaton is {theState.Population} and it is {theState.Size} Squre miles");

            //Dictionary<string, string> capitals = new Dictionary<string, string>();
            //capitals.Add("Gujarat", "Gandhinagar");
            //capitals.Add("India", "Delhi");
            //capitals.Add("Delhi", "Delhi");
            //capitals.Add("Maharashtra", "Mumbai");

            //var capitalofdelhi = capitals["Delhi"];
            //Console.WriteLine("The capital Of Delhi is {0}", capitalofdelhi);



            var myQueue = new Queue<int>();
            myQueue.Enqueue(100);
            int val = myQueue.Dequeue();
            Console.WriteLine("val: {0}", val);

            for (int i = 0; i < 50; i++)
            {
                myQueue.Enqueue(i);
            }
            foreach (int p in myQueue)
            {
                Console.Write("{0}, ", p);
            }

            var WhichValue = myQueue.Dequeue();
            Console.WriteLine("\n Deque value is: {0}", WhichValue);
            WhichValue = myQueue.Dequeue();
            Console.WriteLine("\n Deque value is: {0}", WhichValue);


            var myStack = new Stack<int>();
            myStack.Push(100);
            int val1 = myStack.Pop();
            Console.WriteLine("val: {0}", val1);

            for (int i = 0; i < 50; i++)
            {
                myStack.Push(i);
            }
            foreach (int p in myStack)
            {
                Console.Write("{0}, ", p);
            }

            var WhichValue1 = myStack.Pop();
            Console.WriteLine("\n popped value is: {0}", WhichValue1);
            WhichValue1 = myStack.Pop();
            Console.WriteLine("\n popped value is: {0}", WhichValue1);

            //var r = new Random();

            //List<int> myList = new List<int>();
            //for (int i = 0; i < 10; i++)
            //{
            //    myList.Add(r.Next());
            //}
            //myList.Sort();
            //foreach (var item in myList)
            //{
            //    Console.WriteLine(item);
            //}

            List<Item> myItems = Item.GetItems(20);

            foreach (Item i in myItems)
            {
                Console.WriteLine("New item ID = {0}, Name {1}", i.ID, i.Name);
            }

            //var items = new Item[5];
            //Random  r = new Random();

            //for (int i = 0; i < items.Length; i++)
            //{
            //    items[i] = new Item(r.Next());
            //}

            //Console.WriteLine("Items: ");

            //foreach (Item  item in items)
            //{
            //    Console.WriteLine("ItemID = {0}", item.ID);
            //}

            //Item myItem  = items[1];
            //Console.WriteLine("id of second item = {0}", myItem.ID);

            //Item myItem1 = items[5];
            //Console.WriteLine("id of second item = {0}", myItem1.ID);

            //var Authors = new string[5];
            //Authors[0] = "asdasd";
            //Authors[1] = "dsad";
            //Authors[2] = "sdjkk";
            //Authors[3] = "sdjkl";
            //Authors[4] = "daskl";

            //Console.WriteLine("Authors:  ");
            //foreach (string item in Authors)
            //{
            //    Console.WriteLine(item);
            //}

            //Array.Sort(Authors);
            //foreach (string item in Authors)
            //{
            //    Console.WriteLine(item);
            //}





            //Test<int> test = new Test<int>();
            //test.display(15);
            //Test<string> tes = new Test<string>();
            //tes.display("dadadsf");
            //Test<float> aa = new Test<float>();
            //aa.display(12f);
            //Test<Person> aaa = new Test<Person>();
            //aaa.display( new Person() { ID= 3,Name="As",Address="asdd"});


            //Person p = new Person() { ID=1, Address="Gondal",Name="jevik"};
            //Person person1 = new Person() { ID = 2, Address = "Gondal", Name = "raj" };
            //var result = p.Equals(person1);
            //Console.WriteLine(result);

            //Person person2 = p;
            //var result1 = p.Equals(person2);
            //Console.WriteLine(result1);

            //ArrayList arrayList = new ArrayList();
            //arrayList.Add(p);
            //arrayList.Add(person1);

            //foreach (var item in arrayList)
            //{
            //    Console.WriteLine(item);
            //}

            //ArrayList list = new ArrayList() { 123,45, "fasf", "sdad" };
            //foreach (var item in list)
            //{
            //    Console.WriteLine(item);
            //}

            //List<Person> people = new List<Person>()
            //{ new Person() { ID = 1, Name = "jevik", Address = "Ahmedabad" },
            //    new Person() { ID = 2, Name = "tirath", Address = "ahmedabad" }}; 
            //foreach (var item in people)
            //{
            //    Console.WriteLine(item.ID + " " + item.Name + " " + item.Address);
            //}
            //Person res = people.Find(people => people.ID == 2);
            //Console.WriteLine(res);

            //Dictionary<int, Person> listdata = new Dictionary<int, Person>();
            //listdata.Add(p.ID, p);
            //listdata.Add(person1.ID, person1);

            //foreach (var item in listdata)
            //{
            //    Console.WriteLine(item.Key + " " + item.Value);
            //}
            //int id = Convert.ToInt32(Console.ReadLine());
            //if(listdata.ContainsKey(id))
            //{
            //    var persondata = listdata[id];
            //    Console.WriteLine(persondata);
            //}
            //else
            //{
            //    Console.WriteLine("record not availabel");
            //}
        }
    }
}
