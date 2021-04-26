using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;

namespace Day7_8Practice
{
    class NewStudent
    {
        public string First { get; set; }
        public string Last { get; set; }
        public int ID { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public List<int> Scores;
    }

    class Teacher
    {
        public string First { get; set; }
        public string Last { get; set; }
        public int ID { get; set; }
        public string City { get; set; }
    }

    class Market
    {
        public string Name { get; set; }
        public string[] Items { get; set; }
    }

    class Plant
    {
        public string Name { get; set; }
    }

    class CarnivorousPlant : Plant
    {
        public string TrapType { get; set; }
    }

    class MsdnPractice
    {
        public void Display()
        {
            // Create the first data source.
            List<NewStudent> newStudents = new List<NewStudent>()
            {
                new NewStudent { First="Svetlana",
                    Last="Omelchenko",
                    ID=111,
                    Street="123 Main Street",
                    City="Seattle",
                    Scores= new List<int> { 97, 92, 81, 60 } },
                new NewStudent { First="Claire",
                    Last="O’Donnell",
                    ID=112,
                    Street="124 Main Street",
                    City="Redmond",
                    Scores= new List<int> { 75, 84, 91, 39 } },
                new NewStudent { First="Sven",
                    Last="Mortensen",
                    ID=113,
                    Street="125 Main Street",
                    City="Lake City",
                    Scores= new List<int> { 88, 94, 65, 91 } },
            };
        
            // Create the second data source.
            List<Teacher> teachers = new List<Teacher>()
            {
                new Teacher { First="Ann", Last="Beebe", ID=945, City="Seattle" },
                new Teacher { First="Alex", Last="Robinson", ID=956, City="Redmond" },
                new Teacher { First="Michiyo", Last="Sato", ID=972, City="Tacoma" }
            };

            // Create the query.
            var peopleInSeattle = (from student in newStudents
                                   where student.City == "Seattle"
                                   select student.Last)
                        .Concat(from teacher in teachers
                                where teacher.City == "Seattle"
                                select teacher.Last);

            var peopleInSeattle1 = (from student in newStudents
                                   where student.City == "Seattle"
                                   select student.Last)
                        .Union(from teacher in teachers
                                where teacher.City == "Seattle"
                                select teacher.Last);

            Console.WriteLine("The following students and teachers live in Seattle(Using concat):");
            // Execute the query.
            foreach (var person in peopleInSeattle)
            {
                Console.WriteLine(person);
            }

            Console.WriteLine();

            Console.WriteLine("The following students and teachers live in Seattle(Using union):");
            // Execute the query.
            foreach (var person in peopleInSeattle1)
            {
                Console.WriteLine(person);
            }

            Console.WriteLine();
            // Query syntax and Methos Syntax
            Console.WriteLine("Query Syntax & Method Syntax:");
            int[] numbers = { 5, 10, 8, 3, 6, 12 };

            //Query syntax:
            IEnumerable<int> numQuery1 =
                from num in numbers
                where num % 2 == 0
                orderby num
                select num;

            //Method syntax:
            IEnumerable<int> numQuery2 = numbers.Where(num => num % 2 == 0).OrderBy(n => n);

            foreach (int i in numQuery1)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine();
            foreach (int i in numQuery2)
            {
                Console.Write(i + " ");
            }

            Console.WriteLine();
            Console.WriteLine("Grouping based on 1st character of string:");
            string[] stringArray = { "Apple", "Banana", "Kiwi", "Grape", "Orange", "App", "Bana" };
            var query = from str in stringArray
                        group str by str[0] into stringGroup
                        orderby stringGroup.Key
                        select stringGroup;

            foreach (var item in query)
            {
                Console.WriteLine(item.Key);
            }

            var query1 = from str in stringArray
                         where str[0] == 'A'
                         select str;

            Console.WriteLine();
            Console.WriteLine("strings starting with 'A':");
            foreach (var item in query1)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("List of all students whose score in 1st test is >90 nd in 3rd test is <80:");
            var query2 = from stud in newStudents
                         where stud.Scores[0] >= 90 && stud.Scores[3]<=80
                         group stud by stud.Scores[0] into studentGroup
                         orderby studentGroup.Key
                         select studentGroup;

            foreach (var item in query2)
            {
                Console.WriteLine(item.Key);
                foreach (var item1 in item)
                {
                    Console.WriteLine(item1.First + " " + item1.Last  + " " + item1.Scores[0] + " " + item1.Scores[3]);
                }
            }

            Console.WriteLine();
            Console.WriteLine("Grouping by 1st character of last name:");
            var studentQuery2 =
                        from student in newStudents
                        group student by student.Last[0];

            // studentGroup is a IGrouping<char, Student>
            foreach (var studentGroup in studentQuery2)
            {
                Console.WriteLine(studentGroup.Key);
                foreach (NewStudent student in studentGroup)
                {
                    Console.WriteLine("   {0}, {1}",
                              student.Last, student.First);
                }
            }

            Console.WriteLine();
            Console.WriteLine("This query returns those students whose first test score was higher than their average score.:");
            var studentQuery5 =
                from student in newStudents
                let totalScore = student.Scores[0] + student.Scores[1] +
                    student.Scores[2] + student.Scores[3]
                where totalScore / 4 < student.Scores[0]
                select student.Last + " " + student.First;

            foreach (string s in studentQuery5)
            {
                Console.WriteLine(s);
            }

            Console.WriteLine();
            string sentence = "Hello World! Learning LINQ from tutorials teacher and msdn site";
            // Split the string into individual words to create a collection.  
            string[] words = sentence.Split(' ');

            // Using query expression syntax.  
            var query3 = from word in words
                        group word.ToUpper() by word.Length into gr
                        orderby gr.Key
                        select new { Length = gr.Key, Words = gr };

            foreach (var obj in query3)
            {
                Console.WriteLine("Words of length {0}:", obj.Length);
                foreach (string word in obj.Words)
                    Console.WriteLine(word);
            }

            Console.WriteLine();
            Console.WriteLine("Ordering words based on length and 1st character:");
            string[] words1 = { "the", "quick", "brown", "fox", "jumps" };

            IEnumerable<string> query4 = from word in words1
                                        orderby word.Length, word[0] descending
                                        select word;

            foreach (string str in query4)
                Console.WriteLine(str);

            Console.WriteLine();
            List<Market> markets = new List<Market>
            {
                new Market { Name = "Emily's", Items = new string[] { "kiwi", "cheery", "banana" } },
                new Market { Name = "Kim's", Items = new string[] { "melon", "mango", "olive" } },
                new Market { Name = "Adam's", Items = new string[] { "kiwi", "apple", "orange" } },
            };

            Console.WriteLine("Market who has all fruits whose name contains 5 characters:");
            // Determine which market have all fruit names length equal to 5
            IEnumerable<string> names = from market in markets
                                        where market.Items.All(item => item.Length == 5)
                                        select market.Name;

            foreach (string name in names)
            {
                Console.WriteLine($"{name} market");
            }

            Console.WriteLine();
            Console.WriteLine("Market which have fruits names starting with o:");
            IEnumerable<string> names1 = from market in markets
                                        where market.Items.Any(item => item.StartsWith("o"))
                                        select market.Name;

            foreach (string name in names1)
            {
                Console.WriteLine($"{name} market");
            }

            Console.WriteLine();
            Console.WriteLine("Market which has kiwi:");
            IEnumerable<string> names2 = from market in markets
                                        where market.Items.Contains("kiwi")
                                        select market.Name;

            foreach (string name in names2)
            {
                Console.WriteLine($"{name} market");
            }

            Console.WriteLine();
            Console.WriteLine("Creating odd & even no. groups:");
            List<int> numbers1 = new List<int>() { 35, 44, 200, 84, 3987, 4, 199, 329, 446, 208 };

            IEnumerable<IGrouping<int, int>> query5 = from number in numbers1
                                                     group number by number % 2;

            foreach (var group in query5)
            {
                Console.WriteLine(group.Key == 0 ? "\nEven numbers:" : "\nOdd numbers:");
                foreach (int i in group)
                    Console.WriteLine(i);
            }

            Console.WriteLine();
            Console.WriteLine("Carnivorous plants which have trap type = snap trap (using cast):");
            Plant[] plants = new Plant[] {
                new CarnivorousPlant { Name = "Venus Fly Trap", TrapType = "Snap Trap" },
                new CarnivorousPlant { Name = "Pitcher Plant", TrapType = "Pitfall Trap" },
                new CarnivorousPlant { Name = "Sundew", TrapType = "Flypaper Trap" },
                new CarnivorousPlant { Name = "Waterwheel Plant", TrapType = "Snap Trap" }
            };

            var query6 = from CarnivorousPlant cPlant in plants
                        where cPlant.TrapType == "Snap Trap"
                        select cPlant;

            foreach (Plant plant in query6)
                Console.WriteLine(plant.Name);

            Console.WriteLine();
            Console.WriteLine("Count occurence of a word in a string:");
            string text = "Historically, the world of data and the world of objects" +
                      " have not been well integrated. Programmers work in C# or Visual Basic" +
                      " and also in SQL or XQuery. On the one side are concepts such as classes," +
                      " objects, fields, inheritance, and .NET APIs. On the other side" +
                      " are tables, columns, rows, nodes, and separate languages for dealing with" +
                      " them. Data types often require translation between the two worlds; there are" +
                      " different standard functions. Because the object world has no notion of query, a" +
                      " query can only be represented as a string without compile-time type checking or" +
                      " IntelliSense support in the IDE. Transferring data from SQL tables or XML trees to" +
                      " objects in memory is often tedious and error-prone.";

            string searchTerm = "data";

            //Convert the string into an array of words  
            string[] source = text.Split(new char[] { '.', '?', '!', ' ', ';', ':', ',' }, StringSplitOptions.RemoveEmptyEntries);

            // Create the query.  Use ToLowerInvariant to match "data" and "Data"
            var matchQuery = from word in source
                             where word.ToLowerInvariant() == searchTerm.ToLowerInvariant()
                             select word;

            // Count the matches, which executes the query.  
            int wordCount = matchQuery.Count();
            Console.WriteLine("{0} occurrences(s) of the search term \"{1}\" were found.", wordCount, searchTerm);

            Console.WriteLine();
            Console.WriteLine("Sentences containing specified set of words:");
            // Split the text block into an array of sentences.  
            string[] sentences = text.Split(new char[] { '.', '?', '!' });

            // Define the search terms. This list could also be dynamically populated at runtime.  
            string[] wordsToMatch = { "Historically", "data", "integrated" };

            // Find sentences that contain all the terms in the wordsToMatch array.  
            // Note that the number of terms to match is not specified at compile time.  
            var sentenceQuery = from sentence1 in sentences
                                let w = sentence1.Split(new char[] { '.', '?', '!', ' ', ';', ':', ',' },
                                                        StringSplitOptions.RemoveEmptyEntries)
                                where w.Distinct().Intersect(wordsToMatch).Count() == wordsToMatch.Count()
                                select sentence1;

            // Execute the query. Note that you can explicitly type  
            // the iteration variable here even though sentenceQuery  
            // was implicitly typed.
            foreach (string str in sentenceQuery)
            {
                Console.WriteLine(str);
            }

            Console.WriteLine();
            var x = from s in sentences
                    where s.Contains(wordsToMatch[0]) && s.Contains(wordsToMatch[1]) && s.Contains(wordsToMatch[2])
                    select s;

            foreach (var item in x)
            {
                Console.WriteLine(item);
            }


            Console.WriteLine();
            Console.WriteLine("Count number of digits in a string:");
            string aString = "ABCDE99F-J74-12-89A";

            // Select only those characters that are numbers  
            IEnumerable<char> stringQuery =
              from ch in aString
              where Char.IsDigit(ch)
              select ch;

            // Execute the query  
            foreach (char c in stringQuery)
                Console.Write(c + " ");

            // Call the Count method on the existing query.  
            int count = stringQuery.Count();
            Console.WriteLine("Count = {0}", count);

            // Select all characters before the first '-'  
            IEnumerable<char> stringQuery2 = aString.TakeWhile(c => c != '-');

            // Execute the second query  
            foreach (char c in stringQuery2)
                Console.Write(c);

            Console.WriteLine();
            
        }
    }
}
