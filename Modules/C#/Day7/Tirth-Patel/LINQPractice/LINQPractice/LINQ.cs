using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LINQPractice
{
    public class LINQ
    {
        public LINQ()
        {
            string[] names = { "Bill", "Steve", "James", "Mohan" };
            var myLinQuery = from name in names
                             where name.Contains('a')
                             select name;
            foreach (var item in myLinQuery)
            {
                Console.WriteLine(item);
            }
        }
    }
}
