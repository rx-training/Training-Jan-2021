using System;
using System.Collections.Generic;

namespace Day6Practice
{
    delegate void disp();
    delegate void disp1(string msg);

    class Test<t>
    {
        t number;
        public Test( t num)
        {
            this.number = num;
        }
        public void displayTest()
        {
            Console.WriteLine($"Called [test] with number :{number}");
        }
    }
    class demo1
    {
        public void display()
        {
            Console.WriteLine("Demo class is called");
        }
        public void display1(string msg)
        {
            Console.WriteLine(msg);
        }
    }
    class demoDate
    {
        public void getDate()
        {
            Console.WriteLine($"demo Date is called {DateTime.Now}");
        }
    }

    class Person
    {
        public string Name { get; set; }
        public int Id { get; set; }

        public override string ToString()
        {
            return $"Id : {Id} , Name : {Name}";
        }
    }
    class eventClass
    {
        public event disp processComplete;
        public void eventClassDemo()
        {
            Console.WriteLine("event is called");
            processCompleted();
        }
        public void processCompleted()
        {
            processComplete?.Invoke();
        }
    }
    class Day6Practice
    {
        public static void ec_processCompleted()
        {
            Console.WriteLine($"Event is finally called");
        }
        static void Main(string[] args)
        {
            demo1 d = new demo1();
            disp demo = new disp(d.display);
            demo += new disp(new demoDate().getDate);
            //demo();
            disp1 demo1 = new disp1(d.display1);
            //demo1("Hello Namra here");

            var p = new disp(delegate ()
            {
                Console.WriteLine("anonymous delegate");
            });
            //p();
            var p1 = new disp(() => {
                Console.WriteLine($"Lamba is called");
            });
            //p1();

            var funcDelegate = new Func<string, string>((msg) => {
                return msg;
            });
            //Console.WriteLine(funcDelegate("Hello func delegate here.."));

            var funcDelegate2 = new Func<int, int, string>((a, b) => {
                return $"Addition of {a} and {b} is {a + b}";
            });
            //Console.WriteLine(funcDelegate2(1, 2));

            Person person = new Person() { Id = 1, Name = "N"};
            Person person1 = new Person() { Id = 2, Name = "B" };
            Dictionary<int, Person> dict = new Dictionary<int, Person>();
            dict.Add(1, person);
            dict.Add(2, person1);

            Func<Person, string> funcPerson = new Func<Person, string>((obj) =>
            {
                return obj.ToString();
            });

            //foreach (var item in dict)
            //{
            //    Console.WriteLine(item.Value.ToString());
            //} 
            eventClass ec = new eventClass();
            ec.processComplete += ec_processCompleted;
            //ec.eventClassDemo();


            int? number;
            number = null;
            if(number.HasValue || number == null)
            {
                Console.WriteLine($"value is null");
            }
            else
            {
                Console.WriteLine($"{number}");
            }

            Test<int> newTest = new Test<int>(12);
            newTest.displayTest();
        }
    }
}
