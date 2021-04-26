using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Day7Practice
{
    class StudentComparerDistinct : IEqualityComparer<Person>
    {
        public bool Equals(Person x, Person y)
        {
            if (x.ID == y.ID
                    && x.Name.ToLower() == y.Name.ToLower())
                return true;

            return false;
        }

        public int GetHashCode(Person obj)
        {
            return obj.ID.GetHashCode();
        }
    }
    class StudentComparer : IEqualityComparer<Person>
    {
        public bool Equals(Person x, Person y)
        {
            if (x.ID == y.ID &&
                        x.Name.ToLower() == y.Name.ToLower())
                return true;

            return false;
        }

        public int GetHashCode(Person obj)
        {
            return obj.GetHashCode();
        }
    }
    class Person
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
    }

    public static class Extensions
    {
        public static IEnumerable<T> InterleaveSequenceWith<T>
        (this IEnumerable<T> first, IEnumerable<T> second)
        {
            var firstIter = first.GetEnumerator();
            var secondIter = second.GetEnumerator();

            while (firstIter.MoveNext() && secondIter.MoveNext())
            {
                yield return firstIter.Current;
                yield return secondIter.Current;
            }
        }

    }
    class Day7Practice
    {
        static IEnumerable<string> Suits()
        {
            yield return "clubs";
            yield return "diamonds";
            yield return "hearts";
            yield return "spades";
        }

        static IEnumerable<string> Ranks()
        {
            yield return "two";
            yield return "three";
            yield return "four";
            yield return "five";
            yield return "six";
            yield return "seven";
            yield return "eight";
            yield return "nine";
            yield return "ten";
            yield return "jack";
            yield return "queen";
            yield return "king";
            yield return "ace";
        }
        
        public static bool IsTeenAger(Person p)
        {
            return p.Age > 12 && p.Age < 20; 
        }

        static void Main(string[] args)
        {
            string[] names = { "a", "ba", "cac", "d" };
            //Linq query
            var myLinqQuery = from name in names
                              where name.Contains('a')
                              select name;

            //foreach (var item in myLinqQuery)
            //Console.Write($"{item} ");

            int[] numbers = { 12, 23, 34, 345, 45, 56, 78 };

            IEnumerable<int> numberQuery = from score in numbers
                                           where score > 50
                                           select score;
            //Console.WriteLine();
            //Console.WriteLine($"----------------------------------------------------------------------------------------");

            foreach (var item in numberQuery)
            {
                //Console.Write($"{item} ");
            }

            //Console.WriteLine();
            //Console.WriteLine($"----------------------------------------------------------------------------------------");

            //var startingDeck = from s in Suits()
            //                   from r in Ranks()
            //                   select new { Suit = s, Rank = r };

            var stratingDeck = Suits().SelectMany(suit => Ranks().Select(rank => new { Suit = suit, Rank = rank }));
            var top = stratingDeck.Take(26);
            var bottom = stratingDeck.Skip(26);
            foreach (var card in stratingDeck)
            {
                //Console.WriteLine(card);
            }
            //Console.WriteLine();
            //Console.WriteLine($"----------------------------------------------------------------------------------------");

            //Console.WriteLine($"Top 26 : ");
            foreach (var item in top)
            {
                //Console.WriteLine(item);
            }
            //Console.WriteLine();
            //Console.WriteLine($"----------------------------------------------------------------------------------------");

            //Console.WriteLine($"Skip 26");
            foreach (var item in bottom)
            {
                //Console.WriteLine(item);
            }
            //Console.WriteLine();

            //Console.WriteLine($"----------------------------------------------------------------------------------------");
            var shuffle = top.InterleaveSequenceWith(bottom);

            foreach (var item in shuffle)
            {
                //Console.WriteLine(item);
            }
            IList<String> stringList = new List<string> {
                "C# Tutorials",
                "VB.NET Tutorials",
                "Learn C++",
                "MVC Tutorials",
                "Java"
            };
            var result = stringList.Where(s => s.Contains("Tutorials"));

            //Console.WriteLine();
            //foreach (var item in result)
            //{
            //    Console.WriteLine(item);
            //}

            List<Person> people = new List<Person>() {
                new Person(){ID = 1, Name = "John", Age = 15},
                new Person(){ID=2,Name = "Johny", Age = 20}
            };
            // single or singleorDefault
            // single 
            // if more than one or no such result is found then generate error
            // SingleOrDefault will not generate error for no result
            var res1 = people.Single(p => p.Name.Contains("Johny"));
            //Console.WriteLine(res1);


            var filteredResult = from s in people
                                 where s.ID > 1 && s.ID < 20
                                 select s.Name;
            // doing it by function
            var filteredResult1 = from s in people
                                  where IsTeenAger(s)
                                  select s.Name;

            // doing it with lambda function
            var filteredResult2 = people.Where(s => s.Age > 12 && s.Age < 20);

            // multiple where clause
            //filteredResult2 = (IEnumerable<Person>)(from s in people
            //                  where s.Age > 12
            //                  where s.Age < 20
            //                  select s.Name);
            //filteredResult2 = people.Where(s => s.Age > 12).Where(s => s.Age < 20);

            // ----------------- OfType
            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Person() { ID = 3, Name = "Nihar", Age = 15 });

            var StringResult = from s in mixedList.OfType<string>()
                               select s;
            var intResult = from s in mixedList.OfType<int>()
                            select s;
            //stringList = (IList<string>)mixedList.OfType<string>();
            intResult = mixedList.OfType<int>();

            // ------------------ ThenBy
            // used after orderby for same data
            var thenByResult = people.OrderBy(s => s.Name).ThenBy(s => s.Age);
            // desecding
            var thenByDescResult = people.OrderBy(s => s.Name).ThenByDescending(s => s.Age);

            // group by - ToLookUp
            // TolookUp is the same as GroupBY; the onlt one difference is the execution of GroupBy is deffered whereas ToLookUp execution is immediate

            IList<Person> studentList = new List<Person>() {
                new Person() { ID = 1, Name = "John", Age = 18 } ,
                new Person() { ID = 2, Name = "Steve",  Age = 21 } ,
                new Person() { ID = 3, Name = "Bill",  Age = 18 } ,
                new Person() { ID = 4, Name = "Ram" , Age = 20 } ,
                new Person() { ID = 5, Name = "Abram" , Age = 21 }
            };
            var GroupedResult = from s in studentList
                                group s by s.Age;
            GroupedResult = studentList.GroupBy(s => s.Age);
            //foreach (var ageGroup in GroupedResult)
            //{
            //    Console.WriteLine($"Age group {ageGroup.Key}");//Each group has a key

            //    foreach (Person people1 in ageGroup)// Each group has inner collection
            //    {
            //        Console.WriteLine($"Name : {people1.Name}");
            //    }
            //}
            var lookUpResult = studentList.ToLookup(s => s.Age);

            IList<string> strList1 = new List<string>()
            {
                "One",
                "Two",
                "Three",
                "Four"
            };
            IList<string> strList2 = new List<string>()
            {
                "One",
                "Two",
                "Five",
                "Six"
            };
            // strList1 is outer sequence, strList2 is inner sequence, str1 is key selector of outer sequence
            // str2 selector of inner sequence
            // (str1,str2) is projection result
            var innerJoin = strList1.Join(strList2,
                                          str1 => str1,
                                          str2 => str2,
                                          (str1, str2) => str1);

            IList<Person> studentList2 = new List<Person>() {
                new Person() { ID = 1, Name = "John", Age = 18 } ,
                new Person() { ID = 2, Name = "Steve",  Age = 21 } ,
                new Person() { ID = 3, Name = "Bill",  Age = 18 } ,
                new Person() { ID = 4, Name = "Ram" , Age = 20 }
            };
            var innerJoin2 = from sl1 in studentList
                             join sl2 in studentList2
                             on sl1.ID equals sl2.ID
                             select new
                             {
                                 studentName = sl1.Name,
                                 Age = sl2.Age
                             };
            //foreach (var st in innerJoin2)
            //{
            //    Console.WriteLine($"{st.Age}  {st.studentName}");
            //}

            var groupJoin = studentList.GroupJoin(studentList2,
                                        std => std.ID,
                                        s => s.ID,
                                        (std, studentGroup) => new
                                        {
                                            Students = studentGroup,
                                            studentAge = std.Age
                                        });
            //foreach (var item in groupJoin)
            //{
            //    Console.WriteLine(item.studentAge);
            //    foreach (var stud in item.Students)
            //    {
            //        Console.WriteLine(stud.Name);
            //    }
            //}
            var groupJoinQuery = from std1 in studentList
                                 join std2 in studentList2
                                 on std1.Age equals std2.Age
                                 into studentGroup
                                 select new
                                 {
                                     Students = studentGroup,
                                     Age = std1.Age
                                 };
            //foreach (var item in groupJoinQuery)
            //{
            //    Console.WriteLine(item.Age);

            //    foreach (var stud in item.Students)
            //        Console.WriteLine(stud.Name);
            //}

            // select
            var resultSelect = studentList.Select(s => new { Id = s.ID, Name = s.Name });
            //foreach (var item in resultSelect)
            //{
            //    Console.WriteLine($"Id : {item.Id} Name : {item.Name}");
            //}

            // All : Checks if all the elements in a sequence satisfies the specified condition
            // Any : Checks if any of the elements in a sequence satisfies the specified condition
            // Contains : Checks if the sequence contains a specific element

            bool AllStudentTeenAger = studentList.All(s => s.Age > 12 && s.Age < 20);
            //Console.WriteLine($"{AllStudentTeenAger}");
            bool AnyStudentTeenAger = studentList.Any(s => s.Age > 12 && s.Age < 20);
            //Console.WriteLine($"{AnyStudentTeenAger}");

            IList<int> intList = new List<int>() { 1, 2, 4, 5, 6 };
            //Console.WriteLine($"{intList.Contains(5)}");

            Person std = new Person() { ID = 3, Name = "Bill" };
            bool resultContains = studentList.Contains(std, new StudentComparer());

            IList<string> strListAgg = new List<string>() { "one", "two", "Three" };
            var CommaSeperateString = strListAgg.Aggregate((s1, s2) => s1 + ", " + s2);

            //Console.WriteLine($"{CommaSeperateString}");

            string CommaSeperatedStudentName = studentList.Aggregate<Person, string>(
                    "Student Names : ",//seed value
                    (str, s) => str += s.Name + ", "
                );

            //Console.WriteLine(CommaSeperatedStudentName);
            int SumOfStudentAge = studentList.Aggregate<Person, int>(0, (totalAge, s) => totalAge += s.Age);
            //Console.WriteLine(SumOfStudentAge);
            string commaSeparatedStudentNames = studentList.Aggregate<Person, string, string>(
                                            String.Empty, // seed value
                                            (str, s) => str += s.Name + ",", // returns result using seed value, String.Empty goes to lambda expression as str
                                            str => str.Substring(0, str.Length - 1)); // result selector that removes last comma

            //Console.WriteLine(commaSeparatedStudentNames);

            IList<int> intList1 = new List<int>() { 10, 20, 21, 45, 30 };

            //Avearage
            var avg = intList1.Average();
            var avgAge = studentList.Average(s => s.Age);
            //Console.WriteLine(avg);


            // count
            var totalElement = intList1.Count();//5
            var evenElements = intList1.Count(i => i % 2 == 0);//3

            var totalPeople = studentList.Count();
            var teenPeople = studentList.Count(s => s.Age >= 18);

            //Console.WriteLine((from s in studentList
            //select s.Age).Count());

            var largest = intList1.Max();
            var LargestEvenElements = intList1.Max(i =>
            {
                if (i % 2 == 0)
                    return i;
                return 0;
            });
            var oldest = studentList.Max(s => s.Age);

            //Sum\

            var total = intList1.Sum();
            var sumOfEven = intList1.Sum(i =>
            {
                if (i % 2 == 0)
                    return i;
                return 0;
            });
            var sumOfAge = studentList.Sum(s => s.Age);

            var numOfAdult = studentList.Sum(s =>
            {
                if (s.Age >= 18)
                    return 1;
                else
                    return 0;
            });
            //ElementAt : Returns the element at a specified index in a collection
            //ElementAtOrDefault : Returns the element at a specified index in a collection or a default value if the index is out of range
            //First : Returns the first element of a collection, or the first element that satisfies a condition
            //FirstOrDefault : Returns the first element of a collection, or the first element that satisfies a condition.
            //Returns a default value if index is out of range
            //Last : Returns the last element of a collection, or the last element that satisfies a condition
            //LastOrDefault : Returns the last element of a collection, or the last element that satisfies a condition
            //Returns a default value if index is out of range
            //Single : Returns the only element of a collection, or the only element that satisfies a condition
            //SingleOrDefault : Returns the only element of a collection, or the only element that satisfies a condition.
            //Returns a default value if no such element exists or the collection does not contain exactly one element

            //Console.WriteLine(intList1.ElementAt(0));
            //Console.WriteLine(intList1.ElementAt(9));//throws an exception
            //Console.WriteLine(intList1.ElementAtOrDefault(9) + "-----    Default value");

            //Console.WriteLine(intList1.First());
            //Console.WriteLine(intList1.FirstOrDefault());// return 0 default value if not initialized

            //Console.WriteLine(intList1.Last());
            //Console.WriteLine(intList1.LastOrDefault());//return int value 0 if not found last element
            //Console.WriteLine(strList1.LastOrDefault(s => s.Contains("t")));

            //Console.WriteLine(intList1.Single(i => i == 10));

            //Console.WriteLine(intList1.Single(i => i < 75)); // error

            //Console.WriteLine(intList1.SingleOrDefault(i => i == 19));

            IList<string> strList11 = new List<string>() { "One", "Two", "Three", "Four", "Three" };

            IList<string> strList21 = new List<string>() { "One", "Two", "Three", "Four", "Three" };

            bool isEqual = strList11.SequenceEqual(strList21); // returns true
            //Console.WriteLine(isEqual);// true
            strList21 = new List<string>() { "Two", "One", "Three", "Four", "Three" };
            isEqual = strList11.SequenceEqual(strList21);
            //Console.WriteLine(isEqual);// false

            Person per1 = new Person() { ID = 1, Name = "Namra" };
            IList<Person> stud1 = new List<Person>() { per1 };
            IList<Person> stud2 = new List<Person>() { per1 };

            isEqual = stud1.SequenceEqual(stud2); // true

            Person per2 = new Person() { ID = 1, Name = "Namra" };

            IList<Person> stud3 = new List<Person>() { per1 };
            IList<Person> stud4 = new List<Person>() { per2 };

            isEqual = stud3.SequenceEqual(stud4);

            IList<string> collection1 = new List<string>() { "One", "Two", "Three"};
            IList<string> collection2 = new List<string>() { "Four", "Five" };

            var collection3 = collection1.Concat(collection2);

            //foreach(string str in collection3)
            //{
            //    Console.WriteLine(str);
            //}

            IList<string> emptyList = new List<string>();

            var newEmptyList1 = emptyList.DefaultIfEmpty();
            var newEmptyList2 = emptyList.DefaultIfEmpty("None");

            //Console.WriteLine($"Count {newEmptyList1.Count()} Value {newEmptyList1.ElementAt(0)}");
            //Console.WriteLine($"Count {newEmptyList2.Count()} Value {newEmptyList2.ElementAt(0)}");

            // -------------------------------------------------------------------------------------------------
            // EMPTY, RANGE, REPEAT
            // Empty : Returns an empty collection
            // Range : Generates colletion of IEnumerable<T> type with specified number of elements with sequential
            // values. starting from first element
            //Repeat : Generates a collection of IEnumerable<T> type with specified number of \
            // elements and each element contains same specified value

            var EmptyCollection1 = Enumerable.Empty<string>();
            var EmptyCollection2 = Enumerable.Empty<Person>();
            //Console.WriteLine( EmptyCollection1.Count());
            //Console.WriteLine(EmptyCollection1.GetType().Name);

            var intCollection = Enumerable.Range(10, 11);
            //10 is initial value at index 0 and 11 is count of collection
            //Console.WriteLine($"Total count {intCollection.Count()}");

            //for (int i = 0; i < intCollection.Count(); i++)
            //{
            //    Console.WriteLine($"Value at index {i} : {intCollection.ElementAt(i)}");
            //}

            var intCollection2 = Enumerable.Repeat(10, 11);
            // 10 is value for all element and 11 is count of collction
            //Console.WriteLine($"count is {intCollection2.Count()}");

            //for (int i = 0; i < intCollection2.Count(); i++)
            //{
            //    Console.WriteLine($"Value at index {i} : {intCollection2.ElementAt(i)}");
            //}

            //Distinct : returns distinct values from a collection
            //Except : Returns the difference between two sequence, which means the elements of one collection that do not appear in the second collection
            //Intersect : Returns the intersection of two sequences, which means elements that appear in both the collection
            //Union : Returns unique elements from two sequences, which means unique elements that appear in either pf the two sequences

            IList<string> strList4 = new List<string>() { "One", "Two", "Three", "Two", "Three" };

            IList<int> intList4 = new List<int>() { 1, 2, 3, 2, 4, 4, 3, 5 };

            var distinctList1 = strList4.Distinct();//one, two, three
            var distinctList2 = intList4.Distinct();//1, 2, 3, 4, 5

            var distinctStudent = studentList.Distinct(new StudentComparerDistinct());
            //foreach (Person item in distinctStudent)
            //{
            //    Console.WriteLine(item.Name);
            //}

            //Except

            IList<string> strList5 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
            IList<string> strList6 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight" };

            var resultExcept = strList5.Except(strList6);
            //foreach (string item in resultExcept)
            //{
            //    Console.WriteLine(item);
            //}

            var resultIntersect = strList5.Intersect(strList6);
            //foreach (string item in resultIntersect)
            //{
            //    Console.WriteLine(item);
            //}

            var resultUnion = strList5.Union(strList6);

            //foreach (string item in resultUnion)
            //{
            //    Console.WriteLine(item);
            //}

            // Skip : Skips elements upto a specified position starting from the first element in a sequence
            // Take : Takes elements upto a specified position starting from the first element in a sequence
            // SkipWhile : Skips elements based on a condition until an element does not satisfy the condition
            // If the first element itself doesn't satisfy the condition, it then skips 0 elements and returns all the element in sequence
            // TakeWhile : Returns elements from the first element until an element does not satisfy the condition
            // If the first elemet itself doesn't satisfy the condition then returns an empty collection

            // Skip
            var skipList = strList5.Skip(2);
            //foreach (var item in skipList)
            //{
            //    Console.WriteLine(item);
            //}
            var resultSkipWhile = strList5.SkipWhile(s => s.Length < 4);
            resultSkipWhile = strList5.SkipWhile((s, i) => s.Length > i);

            //foreach (var item in resultSkipWhile)
            //{
            //    Console.WriteLine(item);
            //}

            var TakeList = strList5.Take(2);

            //foreach (var item in TakeList)
            //{
            //    Console.WriteLine(item);
            //}

            var resultTakeWhile = strList5.TakeWhile(s => s.Length >= 3);

            //foreach (var item in resultTakeWhile)
            //{
            //    Console.WriteLine(item);
            //}

            var resultTakeWhileList = strList5.TakeWhile((s, i) => s.Length > i);

            //foreach (var item in resultTakeWhileList)
            //{
            //    Console.WriteLine(item);
            //}

            
            
        
        }
    }
}
