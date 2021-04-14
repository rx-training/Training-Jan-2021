using System;
using System.Collections.Generic;
using System.Linq;

using System.Collections;


namespace LINQPractice
{
    class Program
    {
        static void ReportTypeProperties<T>(T obj)
        {
            Console.WriteLine("Compile-time type: {0}", typeof(T).Name);
            Console.WriteLine("Actual type: {0}", obj.GetType().Name);
        }
        static void Main(string[] args)
        {
            LINQ l1 = new LINQ();
            Students[] studentArray = {
                    new Students() { StudentID = 1, StudentName = "John", age = 18 ,StandardId  = 1 } ,
                    new Students() { StudentID = 2, StudentName = "Steve",  age = 21 ,StandardId =1} ,
                    new Students() { StudentID = 3, StudentName = "Bill",  age = 25 ,StandardId =2} ,
                    new Students() { StudentID = 4, StudentName = "Ram" , age = 20 ,StandardId =2} ,
                    new Students() { StudentID = 5, StudentName = "Ron" , age = 31 } ,
                    new Students() { StudentID = 6, StudentName = "Chris",  age = 17 } ,
                    new Students() { StudentID = 7, StudentName = "Rob",age = 17,StandardId = 3 } ,
                };


            Students[] teenagerStudents = studentArray.Where(s => s.age > 12 && s.age < 20).ToArray();
            var teenagers = studentArray.Where(s => s.age > 12 && s.age < 20);
            foreach (var item in teenagers)
            {
                Console.WriteLine(item.StudentName);
            }
            Students student5 = studentArray.Where(s => s.StudentID == 5).FirstOrDefault();
            Students bill = studentArray.Where(s => s.StudentName == "Bill").FirstOrDefault();
            Console.WriteLine(student5.StudentID);
            Console.WriteLine(bill.StudentName);
            var primes = new List<int> { 1, 2, 3, 5, 7, 11, 13, 17, 19, 23 };
            var query = from val in primes
                        where val < 13
                        select val;
            foreach (var item in query)
            {
                Console.Write(item);
            }
            var doublMethod = from method in typeof(double).GetMethods()
                              orderby method.Name
                              group method by method.Name into groups
                              select new { MethodName = groups.Key, NumberOfOverloads = groups.Count() };
            foreach (var item in doublMethod)
            {
                Console.WriteLine(item);
            }
            var listTwo = Enumerable.Range(1, 20);
            bool listTwoEmpty = listTwo.Any();
            Console.WriteLine(listTwoEmpty);
            Console.WriteLine("List two has value 12?:" + listTwo.Contains(12));
            //take
            var biglist = listTwo;
            var littleList = biglist.Take(5).Select(x => x * 10);
            foreach (var item in littleList)
            {
                Console.WriteLine(item);
            }
            //ZIP
            string[] postalCodes = { "AL", "AK", "AZ", "AR", "CA" };
            string[] states = { "Alabama", "Alaska", "Arizona", "Arknasas", "California" };

            var statesWithcodes = postalCodes.Zip(states, (code, state) =>

                 code + ":" + state
             );
            foreach (var item in statesWithcodes)
            {
                Console.WriteLine(item);
            }
            //where() overloaded method
            var StudentList = studentArray as IList<Students>;
            var filteredResult = StudentList.Where((s, i) =>
            {
                if (i % 2 == 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            });
            foreach (var item in filteredResult)
            {
                Console.WriteLine(item.StudentName);
            }
            //typeof

            IList mixedlist = new ArrayList();
            mixedlist.Add(0);
            mixedlist.Add("tirth");
            mixedlist.Add(21.22);
            mixedlist.Add(null);
            mixedlist.Add(new Students() { StudentName = "hello", StudentID = 190 });
            var stringresult = from s in mixedlist.OfType<string>()
                               select s;
            foreach (var item in stringresult)
            {
                Console.WriteLine("string type data is:{0}", item);
            }
            var intresult = from s in mixedlist.OfType<int>()
                            select s;
            foreach (var item in intresult)
            {
                Console.WriteLine("Int type data is:{0}", item);
            }
            //GroupBy with kjey
            var groupedResult = StudentList.GroupBy(s => s.age);
            foreach (var item in groupedResult)
            {
                Console.WriteLine("\nAge group:{0}", item.Key);
                foreach (Students s in item)
                {
                    Console.WriteLine("Students Nam:{0}", s.StudentName);
                }
            }
            //ToLookup is the same as GroupBy; the only difference is 


            // GroupBy execution is deferred, whereas ToLookup execution is immediate
            Console.WriteLine("Same Result set with ToLookup:");
            var lookupresult = StudentList.ToLookup(s => s.age);
            foreach (var item in lookupresult)
            {
                Console.WriteLine("\nAge group:{0}", item.Key);
                foreach (Students s in item)
                {
                    Console.WriteLine("Students Nam:{0}", s.StudentName);
                }
            }
            string[] str = new string[] { "1", "2", "3", "4" };
            var commaseperatedstring = str.Aggregate((s1, s2) => s1 + "," + s2);
            Console.WriteLine(commaseperatedstring);
            //overloaded aggregate method
            string commaSeperatedlist = StudentList.Aggregate<Students, string>
                ("Students Names:", (str, s) => str += s.StudentName + ",");
            Console.WriteLine(commaSeperatedlist);

            //Aggregate with result selector



            var AggragateResult = StudentList.Aggregate<Students, string, string>
           (
           String.Empty,
           (str, s) => str += s.StudentName + ",",
           str => str.Substring(0, str.Length - 1)
           );
            Console.WriteLine(AggragateResult);
            //average method
            IList<int> intlist = new List<int>() { 10, 20, 40, 30 };
            Console.WriteLine("Average is {0}", intlist.Average());
            var ageavg = StudentList.Average(s => s.age);
            Console.WriteLine(ageavg);
            //count methods
            var Totalstudents = StudentList.Count();
            Console.WriteLine("number of students are :{0}", Totalstudents);
            var adulstStudents = StudentList.Count(s => s.age >= 18);
            Console.WriteLine("number of Adult  students are:{0}", adulstStudents);
            //max methods

            var LargestEvenElement = intlist.Max(i =>
            {
                if (i % 2 == 0)
                {
                    return i;

                }
                else
                {
                    return 0;
                }
            });
            Console.WriteLine(LargestEvenElement);

            //oldest studnet
            var oldeststudent = StudentList.Max(s => s.age);
            Console.WriteLine("oldest student age is:{0}", oldeststudent);

            //Group Join
            IList<Standard> standardList = new List<Standard>()
            {
                new Standard() { StandardID = 1, StandardName = "Standard 1" },
                new Standard() { StandardID = 2, StandardName = "Standard 2" },
                new Standard() { StandardID = 3, StandardName = "Standard 3" }
            };

            var groupjoin = standardList.GroupJoin(StudentList,//inner sequnce
                std => std.StandardID,//outer sequence
                s => s.StandardId,//innner Key selector condition
                (s1, s2) => new//resultSelector
                {
                    students = s2,
                    standardFulldName = s1.StandardName

                });
            //var groupjoin2 = StudentList.GroupJoin(standardList,
            //    s => s.StandardId,
            //    std =>std.StandardID,

            //    (s1, s2) => new
            //    {
            //      standardFullname = s1.StudentName,



            //    }); 

            //foreach (var item in groupjoin2)
            //{
            //    Console.WriteLine(item.students);
            //    foreach (var items in item.standardFulldName)
            //    {
            //        Console.WriteLine((items.StandardID));
            //    }
            //}
            var sumofAge = StudentList.Sum(s => s.age);
            Console.WriteLine("sum of student age is:{0}", sumofAge);
            var countofadults = StudentList.Sum(s =>
            {
                if (s.age >= 18) return 1;
                else return 0;
            });
            Console.WriteLine(countofadults);
            intlist = new List<int>() { 10, 20, 40, 30, 50, 60 };
            Console.WriteLine("First Element of intLsit is:{0}", intlist.ElementAtOrDefault(0));
            Console.WriteLine(" Element which is not in intLsit is:{0}", intlist.ElementAtOrDefault(10));
            //first ot firstorDefault or first element whcih statisfy condition
            Console.WriteLine("first elemet is:{0}", intlist.First());
            Console.WriteLine("first element which can be divided by 3:{0}", intlist.FirstOrDefault(i => i % 3 == 0));
            //last or last element statisfying the conditon
            Console.WriteLine("Last element is:{0}", intlist.Last());
            Console.WriteLine("Last element which can be divided by 3 is:{0}", intlist.LastOrDefault(i => i % 7 == 0));
            IList<string> strList = new List<string>() { null, "two", "three", "four", "five" };
            //Console.WriteLine("Single element from list is:{0}",strList.Single());//unhandled exception
            Console.WriteLine("Single element from list is:{0}", strList.Single(str => str == "two"));
            Console.WriteLine("Single element from list is:{0}", strList.SingleOrDefault(str => str == "six"));

            //sequnce equal

            bool isequals = StudentList.SequenceEqual(StudentList);
            Console.WriteLine(isequals);

            //diffrent object having same data returns false
            Students s1 = new Students() { StudentName = "ABC", StudentID = 101 };
            Students s2 = new Students() { StudentName = "ABC", StudentID = 101 };
            IList<Students> stdlist1 = new List<Students> { s1 };
            IList<Students> stdlist2 = new List<Students> { s2 };
            isequals = stdlist1.SequenceEqual(stdlist2);
            Console.WriteLine("Diffrent object same data is same?:{0}", isequals);


            //concat two collection
            var concat = stdlist1.Concat(stdlist2);
            
            foreach (var item in concat)
            {
                Console.WriteLine(item.StudentName);
            }


            //normal collection

            IList<int> collection1 = new List<int>() { 1, 2, 3 };
            IList<int> collection2 = new List<int>() { 4, 5, 6 };

            var collection3 = collection1.Concat(collection2);

            foreach (int i in collection3)
                Console.WriteLine(i);


            //default if empty
            IList<string> emptylist = new List<string>();
            var newemptylist = emptylist.DefaultIfEmpty();
            Console.WriteLine("count is: {0} , value is {1}",newemptylist.Count(),newemptylist.ElementAt(0));// cpunt will be value will bezero

            //Empty collection
            var empycollection = Enumerable.Empty<string>();//empty collection of string


            //range
            var intcollectionofRange = Enumerable.Range(10, 5);
            Console.WriteLine("lenght is :{0} and first value is {1} last value is: {2}",
                intcollectionofRange.Count(), intcollectionofRange.ElementAt(0), intcollectionofRange.Last());

            //reapeat 

            var repeat = Enumerable.Repeat<int>(10, 4);//(value , times) 
            foreach (var item in repeat)
            {
                Console.WriteLine(item);
            }


            // Distinct will return only one value even if its reapeting
            intlist.Add(10);
            intlist.Add(20);
            intlist.Add(20);
            intlist.Add(10);
            Console.WriteLine("oprginal list is:\n");
            foreach (var item in intlist)
            {
                Console.WriteLine(item);
            }

            var distinct = intlist.Distinct();
            Console.WriteLine("Distinct list is:\n");
            foreach (var item in distinct)
            {
                Console.WriteLine(item);
            }

            //except mathod return collection of first collection value whoch is not in second
            Console.WriteLine("value whiocch is not in second\n");
            IList<int> intlist2 = new List<int> { 10, 20, 30 };
            var except = intlist.Except(intlist2);
            foreach (var item in except)
            {
                Console.WriteLine(item);
            }


            //intersect returns that only elemts which are common
            Console.WriteLine("value whiocch is commonn in both\n");
            var Intersect = intlist.Intersect(intlist2);
            foreach (var item in Intersect)
            {
                Console.WriteLine(item);
            }


            //union combines unique valuees from both collection
            var union = intlist.Union(intlist2);
            Console.WriteLine("union list is f:\n");
            foreach (var item in union)
            {
                Console.WriteLine(item);
            }

            //skip skip to the specified element starting from first
            Console.WriteLine("intlist skipped from 3rd\n");
            var newlist = intlist.Skip(3);
            foreach (var item in newlist)
            {
                Console.WriteLine(item);
            }

            //skipwhile checks the condition once its statisfied then it will not check again
            strList = new List<string>() {
                                            "One",
                                            "Two",
                                            "Three",
                                            "Four",
                                            "Five",
                                            "Six"  };

            var resultList = strList.SkipWhile(s => s.Length < 4);

            foreach (string strs in resultList)
                Console.WriteLine(strs);


            //take split sequnce in two parts and return one of parts
            var resultLists = strList.Take(2);
            Console.WriteLine("take");
            foreach (string strs in resultLists)
                Console.WriteLine(strs);
            var resultLists2 = strList.TakeWhile(s => s.Length > 4);
            Console.WriteLine("takewhile length 4");
            foreach (string strs in resultLists2)
            {
                Console.WriteLine(strs);
            }
            //asenumerable and AsQueryable operator

            ReportTypeProperties(studentArray);
            ReportTypeProperties(studentArray.AsEnumerable());
            ReportTypeProperties(studentArray.AsQueryable());

            //converts Generic list to a Generic Disctionary
            IDictionary<int, Students> StudDict = StudentList.ToDictionary<Students,int> (s => s.StudentID);
            foreach (var item in StudDict.Keys)
            {
                Console.WriteLine("key: {0} , Value: {1}",item ,(StudDict[item] as Students).StudentName);
            }


            //let keyword

            var lowercaseStudentNames = from s in StudentList
                                        let lowercaseStudentName = s.StudentName.ToLower()
                                        where lowercaseStudentName.StartsWith("r")
                                        select lowercaseStudentName;
            foreach (var item in lowercaseStudentNames)
            {
                Console.WriteLine(item);
            }


            //into keywords

          var   teenagerStudents1 = from s in StudentList
                               where s.age > 12 && s.age < 20
                               select s
                               into teenStudents
                               where teenStudents.StudentName.StartsWith("J")
                               select teenStudents;
            foreach (var item in teenagerStudents1)
            {
                Console.WriteLine(item.StudentName);
            }
        }
    }
}
