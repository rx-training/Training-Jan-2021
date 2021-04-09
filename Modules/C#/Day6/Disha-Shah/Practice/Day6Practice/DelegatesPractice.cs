using System;
using System.Collections;
using System.Text;

namespace Day6Practice
{
    // Describes a book in the book list:
    public struct Book
    {
        public string Title;        // Title of the book.
        public string Author;       // Author of the book.
        public decimal Price;       // Price of the book.
        public bool Paperback;      // Is it paperback?

        public Book(string title, string author, decimal price, bool paperBack)
        {
            Title = title;
            Author = author;
            Price = price;
            Paperback = paperBack;
        }
    }

    // Declare a delegate type for processing a book:
    public delegate void ProcessBookCallback(Book book);

    // Maintains a book database.
    public class BookDB
    {
        // List of all books in the database:
        ArrayList list = new ArrayList();

        // Add a book to the database:
        public void AddBook(string title, string author, decimal price, bool paperBack)
        {
            list.Add(new Book(title, author, price, paperBack));
        }

        // Call a passed-in delegate on each paperback book to process it:
        public void ProcessPaperbackBooks(ProcessBookCallback processBook)
        {
            foreach (Book b in list)
            {
                if (b.Paperback)
                    // Calling the delegate:
                    processBook(b);
            }
        }
    }

    // Class to total and average prices of books:
    class PriceTotaller
    {
        int countBooks = 0;
        decimal priceBooks = 0.0m;

        internal void AddBookToTotal(Book book)
        {
            countBooks += 1;
            priceBooks += book.Price;
        }

        internal decimal AveragePrice()
        {
            return priceBooks / countBooks;
        }
    }

    
    public class MethodClass
    {
        public void Method1(string message) { }
        public void Method2(string message) { }
    }

    class DelegatesPractice
    {
        public string Text { get; set; }

        public delegate int SendDoc();

        public void ReportSendingResult(SendDoc sendingDelegate)
        {
            if(sendingDelegate() == 0)
            {
                Console.WriteLine("Success");
            }
            else
            {
                Console.WriteLine("Unable to send");
            }
        }

        public delegate void myDel(int x, int y);

        public static void Add(int x, int y)
        {
            Console.WriteLine(x+y);
        }

        public static void Multiply(int x, int y)
        {
            Console.WriteLine(x * y);
        }

        public delegate void Del(string message);

        // Create a method for a delegate.
        public static void DelegateMethod(string message)
        {
            Console.WriteLine(message);
        }

        public static void MethodWithCallback(int param1, int param2, Del callback)
        {
            callback("The number is: " + (param1 + param2).ToString());
        }

        // Declare a delegate
        delegate void mulDel(int i, double j);

        // Declare the associated method.
        void MultiplyNumbers(int m, double n)
        {
            Console.Write(m * n + " ");
        }

        static void NewMultiplyNumbers(int m, double n)
        {
            Console.Write(m * n * 3 + " ");
        }

        // Print the title of the book.
        static void PrintTitle(Book b)
        {
            Console.WriteLine($"   {b.Title}");
        }

        // Initialize the book database with some test books:
        static void AddBooks(BookDB bookDB)
        {
            bookDB.AddBook("The C Programming Language", "Brian W. Kernighan and Dennis M. Ritchie", 19.95m, true);
            bookDB.AddBook("The Unicode Standard 2.0", "The Unicode Consortium", 39.95m, true);
            bookDB.AddBook("The MS-DOS Encyclopedia", "Ray Duncan", 129.95m, false);
            bookDB.AddBook("Dogbert's Clues for the Clueless", "Scott Adams", 12.00m, true);
        }


        public void Display()
        {
            myDel del = Add;
            //int result = del(20, 67);
            //Console.WriteLine(result);

            // Multicast Delegates
            del += Multiply;
            del(10, 20);

            // Instantiate the delegate.
            Del handler = DelegateMethod;

            // Call the delegate.
            handler("Hello World");

            MethodWithCallback(1, 2, handler);

            var obj = new MethodClass();
            Del d1 = obj.Method1;
            Del d2 = obj.Method2;
            Del d3 = DelegateMethod;

            //Both types of assignment are valid.
            Del allMethodsDelegate = d1 + d2;
            allMethodsDelegate += d3;

            //remove Method1
            allMethodsDelegate -= d1;

            // copy AllMethodsDelegate while removing d2
            Del oneMethodDelegate = allMethodsDelegate - d2;

            Delegate[] invocationList = allMethodsDelegate.GetInvocationList();
            foreach (var item in invocationList)
            {
                Console.WriteLine(item);

            }

            int invocationCount = allMethodsDelegate.GetInvocationList().GetLength(0);
            Console.WriteLine(invocationCount);

            // Named Delegate
            DelegatesPractice m = new DelegatesPractice();

            // Delegate instantiation using "MultiplyNumbers"
            mulDel d = m.MultiplyNumbers;

            // Invoke the delegate object.
            Console.WriteLine("Invoking the delegate using 'MultiplyNumbers':");
            for (int i = 1; i <= 5; i++)
            {
                d(i, 2);
            }

            Console.WriteLine();

            d = DelegatesPractice.NewMultiplyNumbers;

            // Invoke the delegate object.
            Console.WriteLine("Invoking the delegate using 'NewMultiplyNumbers':");
            for (int i = 1; i <= 5; i++)
            {
                d(i, 2);
            }

            Console.WriteLine();

            // Instantiate Del by using an anonymous method.
            Del del3 = delegate (string name)
            { Console.WriteLine($"Notification received for: {name}"); };

            del3("Hello");

            // Instantiate Del by using a lambda expression.
            Del del4 = name => { Console.WriteLine($"Notification received for: {name}"); };

            del3("Hello World");

            BookDB bookDB = new BookDB();

            // Initialize the database with some books:
            AddBooks(bookDB);

            // Print all the titles of paperbacks:
            Console.WriteLine("Paperback Book Titles:");

            // Create a new delegate object associated with the static
            // method Test.PrintTitle:
            bookDB.ProcessPaperbackBooks(PrintTitle);

            // Get the average price of a paperback by using
            // a PriceTotaller object:
            PriceTotaller totaller = new PriceTotaller();

            // Create a new delegate object associated with the nonstatic
            // method AddBookToTotal on the object totaller:
            bookDB.ProcessPaperbackBooks(totaller.AddBookToTotal);

            Console.WriteLine("Average Paperback Book Price: ${0:#.##}",
                    totaller.AveragePrice());

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("-----Func Delegate-----");
            Console.WriteLine();
            var demo = new Func<string> (() =>
            {
                return "Hello World";
            });

            Console.WriteLine(demo());

            var demo1 = new Func<string,string>((mess) =>
            {
                return mess.ToUpper();
            });

            Console.WriteLine(demo1("disha"));

            string[] arr = { "apple", "orange", "grape" };
            foreach (var item in arr)
            {
                Console.WriteLine(demo1(item));
            }

            Func<string, string> convert = delegate (string s)
            { return s.ToUpper(); };

            string name = "Dakota";
            Console.WriteLine(convert(name));

            var demo2 = new Func<int, int, string>((a, b) =>
            {
                return $"Addition of {a} and {b} is {a+b}";
            });

            Console.WriteLine(demo2(5, 3));

            var demo3 = new Func<string, string, string[]>((s, d) =>
            {
                return s.Split(d);
            });

            string[] arr1 = { "Hello, world", "Learning c#, msdn"};
            foreach (var item in arr1)
            {
                string[] res = demo3(item, ", ");
                Console.WriteLine("Result after split operation:");
                foreach (var item1 in res)
                {
                    Console.WriteLine(item1);
                }
                
            }

        }

    }
}
