using System;
using System.Collections;
using System.Collections.Generic;

namespace Day5Practice
{
    class Day5Practice
    {
        // Dictionary <key , value> Represents a collection of key/value pairs that are organized based on the key
        // List<T> Represents a list of objects that can be accessed by index. Provides methods to search, sort, and modify lists
        // Queue<T> Represents a first in, first out (FIFO) collection of objects
        // SortedList<Key, Value> Represents a collection of key/value pairs that are sorted by key based on the associated IComparere<T> implementation
        // Stack<T> Represents a last in, first out(LIFO) collection of pairs
        // ArrayList Represents an array of objects whose size is dynamically increased as required
        // HashTable Represents a collection of key/value pairs that are organized based on the hash code of the key.

        static void Main(string[] args)
        {
            var salmons = new List<string>();
            salmons.Add("a");
            salmons.Add("b");
            salmons.Add("c");
            salmons.Add("d");

            foreach (var salmon in salmons)
            {
                Console.Write($"{salmon} ");
            }
            Console.WriteLine();
            var list1 = new List<string> { "a", "b", "c" };
            for (var index = 0; index < list1.Count; index++)
            {
                Console.WriteLine($"{list1[index]}");
            }
            Console.WriteLine();

            // to remove element
            list1.Remove("a");
            for (var index = 0; index < list1.Count; index++)
            {
                Console.WriteLine($"{list1[index]}");
            }

            var numbers = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            // remove odd numbers
            for (var index = numbers.Count - 1; index >= 0; index--)
            {
                if (numbers[index] % 2 == 1)
                {
                    numbers.RemoveAt(index);
                }
            }
            numbers.ForEach(
                number => Console.Write($"{number} "));
            Console.WriteLine();

            var theGalaxies = new List<Galaxy>
            { 
                new Galaxy(){Name = "a", MegaLightYears = 400},
                new Galaxy(){Name = "b", MegaLightYears = 300}
            };

            foreach (Galaxy theGalaxy in theGalaxies)
            {
                Console.WriteLine($"{theGalaxy.Name} {theGalaxy.MegaLightYears}");
            }

            //-------------------------------------------------------------------------------------------------------------------
            // ArrayList

            ArrayList al = new ArrayList();
            al.Add(45);
            al.Add(85);
            al.Add(54);
            al.Add(46);
            al.Add(42);

            Console.WriteLine($"Capacity {al.Capacity} Count {al.Count}");
            Console.WriteLine($"Content");
            foreach(int i in al)
            {
                Console.Write($"{i} ");
            }
            Console.WriteLine();
            Console.WriteLine($"Sorted content : ");
            al.Sort();
            foreach(int i in al)
            {
                Console.Write($"{i} ");
            }
            Console.WriteLine();
            // hashtable
            Hashtable ht = new Hashtable();
            ht.Add("001", "a");
            ht.Add("002", "b"); 
            ht.Add("003", "c");
            ht.Add("004", "d");
            ht.Add("005", "e");

            if(ht.ContainsValue("f"))
            {
                Console.WriteLine("This is in hash table");
            }
            else
            {
                ht.Add("008", "f");
            }
            ICollection key = ht.Keys;

            foreach (string k in key)
            {
                Console.WriteLine($"{k} : {ht[k]}");
            }
            // Sorted list
            Console.WriteLine($"Sorted list");
            SortedList sl = new SortedList();

            sl.Add("001", "a");
            sl.Add("002", "b");
            sl.Add("003", "c");
            sl.Add("004", "d");
            sl.Add("005", "e");
            sl.Add("006", "f");

            ICollection key1 = sl.Keys;

            foreach(string k in key1)
            {
                Console.WriteLine($"{k} : {sl[k]}");
            }
            // stack

            Console.WriteLine($"Stack");

            Stack st = new Stack();
            st.Push('A');
            st.Push('M');
            st.Push('G');
            st.Push('W');

            Console.WriteLine($"Current stack");
            foreach(char c in st)
            {
                Console.Write($"{c} ");
            }
            Console.WriteLine();

            char ck = (char)st.Pop();
            Console.WriteLine(ck);
            Console.WriteLine($"Popped stack");
            foreach (char c in st)
            {
                Console.Write($"{c} ");
            }
            Console.WriteLine();

            Console.WriteLine($"Queue");
            Queue q = new Queue();

            q.Enqueue('A');
            q.Enqueue('B');
            q.Enqueue('C');
            q.Enqueue('D');

            foreach (char c in q) Console.Write($"{c} ");
            Console.WriteLine();
            q.Dequeue();

            foreach (char c in q) Console.Write($"{c} ");

            // Dictionaries

            IDictionary<int, string> numberName = new Dictionary<int, string>();
            numberName.Add(1, "one");
            numberName.Add(2, "Two");
            numberName.Add(3, "Three");

            foreach(KeyValuePair<int,string> kvp in numberName)
            {
                Console.WriteLine($"Key : {kvp.Key}, Value : {kvp.Value}");
            }
            var cities = new Dictionary<string, string>()
            {
                {"UK","London, Manhester, Birmingham"},
                {"USA" ,"Chicago, New York, Washington"},
                {"India", "Mumbai, Delhi, Pune"}
            };
            foreach (var kvp in cities)
                Console.WriteLine($"key : {kvp.Key}, Value : {kvp.Value}");
       

        }
        public class Galaxy
        {
            public string Name { get; set; }
            public int MegaLightYears { get; set; }
        }
       
    }
}
