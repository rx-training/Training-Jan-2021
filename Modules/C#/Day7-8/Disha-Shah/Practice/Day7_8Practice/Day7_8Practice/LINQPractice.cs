using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections;
using System.Linq.Expressions;

namespace Day7_8Practice
{
    class Student : IComparable<Student>
    {
        public int StudentID { get; set; }
        public String StudentName { get; set; }
        public int Age { get; set; }
        public int StandardID { get; set; }

        public int CompareTo(Student other)
        {
            if (this.StudentName.Length >= other.StudentName.Length)
                return 1;

            return 0;
        }

    }

    public class Standard
    {
        public int StandardID { get; set; }
        public string StandardName { get; set; }
    }

    class StudentComparer : IEqualityComparer<Student>
    {
        public bool Equals(Student x, Student y)
        {
            if (x.StudentID == y.StudentID &&
                        x.StudentName.ToLower() == y.StudentName.ToLower())
                return true;

            return false;
        }

        public int GetHashCode(Student obj)
        {
            return obj.StudentID.GetHashCode();
        }
    }

    public class LINQPractice
    {
        static void ReportTypeProperties<T>(T obj)
        {
            Console.WriteLine("Compile-time type: {0}", typeof(T).Name);
            Console.WriteLine("Actual type: {0}", obj.GetType().Name);
        }

        public void Display()
        {
            // Data source
            string[] names = { "Bill", "Steve", "James", "Mohan" };

            // LINQ Query 
            var myLinqQuery = from name in names
                              where name.Contains('a')
                              select name;

            // Query execution
            foreach (var name in myLinqQuery)
                Console.Write(name + " ");

            Console.WriteLine();

            var fruits = new List<string>();
            fruits.Add("Apple");
            fruits.Add("Orange");
            fruits.Add("Banana");
            fruits.Add("Grape");

            var myLinqFruits = from fruit in fruits
                                where fruit.EndsWith('e')
                                select fruit;

            foreach (var item in myLinqFruits)
            {
                Console.WriteLine(item);
            }

            var result = fruits.Where(s => s.EndsWith('e'));

            foreach (var item in result)
            {
                Console.WriteLine(item);
            }

            // Get required data using LINQ 
            Student[] studentArray = {
                    new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID=1 } ,
                    new Student() { StudentID = 2, StudentName = "Steve",  Age = 21, StandardID=2 } ,
                    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25, StandardID=1 } ,
                    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID=3 } ,
                    new Student() { StudentID = 5, StudentName = "Ron" , Age = 19, StandardID=2 } ,
                    new Student() { StudentID = 6, StudentName = "Chris",  Age = 17, StandardID=2 } ,
                    new Student() { StudentID = 7, StudentName = "Rob",Age = 18, StandardID=1  } ,
                };

            var allStudents = from student in studentArray
                              select student;

            Console.WriteLine("Students List:");
            foreach (var item in allStudents)
            {
                Console.WriteLine($"{item.StudentID}\t{item.StudentName}\t{item.Age}");
            }

            // Use LINQ to find teenager students (Usinq LINQ Query Syntax)
            var teenAgerStudent = from s in studentArray
                                  where s.Age > 12 && s.Age < 20
                                  select s;

            Console.WriteLine("Teenager Students:");

            foreach (var item in teenAgerStudent)
            {
                Console.WriteLine(item.StudentID + " " + item.StudentName + " " + item.Age);
            }

            // Using LINQ Method Syntax
            var teenAgerStudents = studentArray.Where(s => s.Age > 12 && s.Age < 20)
                                  .ToList<Student>();

            foreach (var item in teenAgerStudents)
            {
                Console.WriteLine($"{item.StudentName} {item.Age}");
            }

            // Using LINQ Method Syntax
            var teenAgerStudents1 = studentArray.Where(s => s.Age > 12 && s.Age < 20)
                                  .ToArray();

            foreach (var item in teenAgerStudents1)
            {
                Console.WriteLine($"{item.StudentName} {item.Age}");
            }

            // Use LINQ to find first student whose name is Bill 
            Student bill = studentArray.Where(s => s.StudentName == "Bill").FirstOrDefault();

            Console.WriteLine($"First Student named Bill: {bill.StudentName} {bill.Age}");

            // Use LINQ to find student whose StudentID is 5
            Student student5 = studentArray.Where(s => s.StudentID == 5).FirstOrDefault();
            Console.WriteLine($"Student with studentId = 5: {student5.StudentID} {student5.StudentName} {student5.Age}");

            // Even elements filtered out
            var filteredResult = studentArray.Where((s, i) => {
                if (i % 2 == 0) // if it is even element
                    return true;

                return false;
            });

            Console.WriteLine("Even Elements:");
            foreach (var std in filteredResult)
                Console.WriteLine(std.StudentName);


            // OfType Operator
            Console.WriteLine("------OfType Operator------");
            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });

            // LINQ Query syntax
            var stringResult = from s in mixedList.OfType<string>()
                               select s;

            var intResult = from s in mixedList.OfType<int>()
                            select s;

            var stdResult = from s in mixedList.OfType<Student>()
                            select s;

            foreach (var str in stringResult)
                Console.WriteLine(str);

            foreach (var integer in intResult)
                Console.WriteLine(integer);

            foreach (var std in stdResult)
                Console.WriteLine(std.StudentName);

            // LINQ Method Syntax
            var stringResult1 = mixedList.OfType<string>();
            foreach (var str in stringResult1)
                Console.WriteLine(str);


            // OrderBy

            // LINQ Query syntax
            var orderByResult = from s in studentArray
                                orderby s.StudentName
                                select s;

            var orderByDescendingResult = from s in studentArray
                                          orderby s.StudentName descending
                                          select s;

            Console.WriteLine();
            Console.WriteLine("Asc:");
            foreach (var item in orderByResult)
            {
                Console.WriteLine(item.StudentName);
            }

            Console.WriteLine();
            Console.WriteLine("Desc:");
            foreach (var item in orderByDescendingResult)
            {
                Console.WriteLine(item.StudentName);
            }


            // LINQ method syntax
            var studentsInAscOrder = studentArray.OrderBy(s => s.StudentName);
            foreach (var item in studentsInAscOrder)
            {
                Console.WriteLine(item);
            }

            var studentsInDescOrder = studentArray.OrderByDescending(s => s.StudentName);
            foreach (var item in studentsInDescOrder)
            {
                Console.WriteLine(item);
            }

            // Multiple sorting
            var multiOrderByResult = from s in studentArray
                                orderby s.StudentName, s.Age
                                select new { s.StudentName, s.Age };

            foreach (var item in multiOrderByResult)
            {
                Console.WriteLine($"{item.StudentName} {item.Age}");
            }

            // ThenBy & ThenByDescending
            var thenByResult = studentArray.OrderBy(s => s.StudentName).ThenBy(s => s.Age);

            var thenByDescResult = studentArray.OrderBy(s => s.StudentName).ThenByDescending(s => s.Age);

            Console.WriteLine("ThenBy:");
            foreach (var item in thenByResult)
            {
                Console.WriteLine($"{item.StudentName} {item.Age}");
            }

            Console.WriteLine("ThenByDescending:");
            foreach (var item in thenByDescResult)
            {
                Console.WriteLine($"{item.StudentName} {item.Age}");
            }


            // GroupBy

            // LINQ Query syntax
            var groupedResult = from s in studentArray
                                group s by s.Age;

            //iterate each group  
            Console.WriteLine();
            Console.WriteLine("GroupBy:");
            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key); //Each group has a key 

                foreach (Student s in ageGroup) // Each group has inner collection
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }

            // LINQ Method syntax
            Console.WriteLine();
            Console.WriteLine("GroupBy using LINQ Method syntax:");
            var groupedResult1 = studentArray.GroupBy(s => s.Age);

            foreach (var ageGroup in groupedResult1)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key);  //Each group has a key 

                foreach (Student s in ageGroup)  //Each group has a inner collection  
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }

            // ToLookUp
            Console.WriteLine();
            Console.WriteLine("ToLookUp using LINQ Method syntax:");
            var lookupResult = studentArray.ToLookup(s => s.Age);

            foreach (var group in lookupResult)
            {
                Console.WriteLine("Age Group: {0}", group.Key);  //Each group has a key 

                foreach (Student s in group)  //Each group has a inner collection  
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }

            // Join
            Console.WriteLine();
            Console.WriteLine("Join:");
            // Student collection
            var strList1 = new List<string>() {
            "One",
            "Two",
            "Three",
            "Four"
            };

            var strList2 = new List<string>() {
            "One",
            "Two",
            "Five",
            "Six"
            };


            // LINQ Method syntax
            var innerJoinResult = strList1.Join(// outer sequence 
                          strList2,  // inner sequence 
                          str1 => str1,    // outerKeySelector
                          str2 => str2,  // innerKeySelector
                          (str1, str2) => str1);

            foreach (var str in innerJoinResult)
            {
                Console.WriteLine("{0} ", str);
            }

            var standardList = new List<Standard>() {
                new Standard(){ StandardID = 1, StandardName="Standard 1"},
                new Standard(){ StandardID = 2, StandardName="Standard 2"},
                new Standard(){ StandardID = 3, StandardName="Standard 3"}
            };

            var innerJoin = studentArray.Join(// outer sequence 
                      standardList,  // inner sequence 
                      student => student.StandardID,    // outerKeySelector
                      standard => standard.StandardID,  // innerKeySelector
                      (student, standard) => new  // result selector
                      {
                          StudentName = student.StudentName,
                          StandardName = standard.StandardName
                      });
            foreach (var item in innerJoin)
            {
                Console.WriteLine($"{item.StudentName} {item.StandardName}");
            }

            // LINQ Query syntax
            Console.WriteLine();
            Console.WriteLine("Result using LINQ Query syntax for join:");
            var innerJoin1 = from s in studentArray // outer sequence
                            join st in standardList //inner sequence 
                            on s.StandardID equals st.StandardID // key selector 
                            select new
                            { // result selector 
                                StudentName = s.StudentName,
                                StandardName = st.StandardName
                            };
            foreach (var item in innerJoin1)
            {
                Console.WriteLine($"{item.StudentName} {item.StandardName}");
            }


            // GruoupJoin
            Console.WriteLine();
            Console.WriteLine("GroupJoin using Method Syntax:");
            var groupJoin = standardList.GroupJoin(studentArray,  //inner sequence
                                std => std.StandardID, //outerKeySelector 
                                s => s.StandardID,     //innerKeySelector
                                (std, studentsGroup) => new // resultSelector 
                                {
                                    Students = studentsGroup,
                                    StandarFulldName = std.StandardName
                                });

            foreach (var item in groupJoin)
            {
                Console.WriteLine(item.StandarFulldName);

                foreach (var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
            }

            Console.WriteLine();
            Console.WriteLine("GroupJoin using Query syntax:");
            var groupJoin1 = from std in standardList
                            join s in studentArray
                            on std.StandardID equals s.StandardID
                            into studentGroup
                            select new
                            {
                                Students = studentGroup,
                                StandardName = std.StandardName
                            };

            foreach (var item in groupJoin1)
            {
                Console.WriteLine(item.StandardName);

                foreach (var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
            }

            // Projection Operators

            // Select
            Console.WriteLine();
            Console.WriteLine("Select Operator using LINQ Query syntax:");
            // returns collection of anonymous objects with Name and Age property
            var selectResult = from s in studentArray
                               select new { Name = "Mr. " + s.StudentName, Age = s.Age };

            // iterate selectResult
            foreach (var item in selectResult)
                Console.WriteLine($"Student Name: {item.Name}, Age: {item.Age}");

            Console.WriteLine();
            Console.WriteLine("Select operator using Method syntax:");
            // returns collection of anonymous objects with Name and Age property
            var selectResult1 = studentArray.Select(s => new {
                Name = s.StudentName,
                Age = s.Age
            });

            // iterate selectResult
            foreach (var item in selectResult1)
                Console.WriteLine($"Student Name: {item.Name}, Age: {item.Age}");

            // SelectMany
            Console.WriteLine();
            Console.WriteLine("SelectMany using Query syntax:");
            List<string> phrases = new List<string>() { "an apple a day", "the quick brown fox" };

            var query = from phrase in phrases
                        from word in phrase.Split(' ')
                        select word;

            foreach (string s in query)
                Console.WriteLine(s);


            // All
            Console.WriteLine();
            Console.WriteLine("All Operator using method syntax:");
            // checks whether all the students are teenagers    
            bool areAllStudentsTeenAger = studentArray.All(s => s.Age > 12 && s.Age < 20);

            Console.WriteLine(areAllStudentsTeenAger);

            // Any
            Console.WriteLine();
            Console.WriteLine("Any Operator using method syntax:");
            // checks whether all the students are teenagers    
            bool areAnyStudentsTeenAger = studentArray.Any(s => s.Age > 12 && s.Age < 20);

            Console.WriteLine(areAnyStudentsTeenAger);

            // Contains
            Console.WriteLine();
            Console.WriteLine("Contains operator for Student class:");
            Student std1 = new Student() { StudentID = 3, StudentName = "Bill" };
            bool result1 = studentArray.Contains(std1, new StudentComparer()); //returns true
            Console.WriteLine(result1);

            // Aggregate
            Console.WriteLine();
            Console.WriteLine("Aggregate operator using method syntax:");
            var strList = new List<String>() { "One", "Two", "Three", "Four", "Five" };

            var commaSeperatedString = strList.Aggregate((s1, s2) => s1 + ", " + s2);

            Console.WriteLine(commaSeperatedString);

            // Aggregate 2nd format
            Console.WriteLine();
            Console.WriteLine("Aggregate using seed value:");
            string commaSeparatedStudentNames = studentArray.Aggregate<Student, string>(
                                        "Student Names: ",  // seed value
                                        (str, s) => str += s.StudentName + ",");

            Console.WriteLine(commaSeparatedStudentNames);

            Console.WriteLine();
            int SumOfStudentsAge = studentArray.Aggregate<Student, int>(0,
                                                (totalAge, s) => totalAge += s.Age);
            Console.WriteLine($"Total age:{SumOfStudentsAge}");

            // Aggregate method with result selector
            Console.WriteLine();
            Console.WriteLine("Aggregate method with result selector:");
            string commaSeparatedStudentNames1 = studentArray.Aggregate<Student, string, string>(
                                            String.Empty, // seed value
                                            (str, s) => str += s.StudentName + ",", // returns result using seed value, String.Empty goes to lambda expression as str
                                            str => str.Substring(0, str.Length - 1)); // result selector that removes last comma

            Console.WriteLine(commaSeparatedStudentNames1);

            // Count
            Console.WriteLine();
            Console.WriteLine("Count:");
            var intList = new List<int>() {7, 10, 21, 30, 45, 50 };

            var totalElements = intList.Count();

            Console.WriteLine("Total Elements: {0}", totalElements);

            var evenElements = intList.Count(i => i % 2 == 0);

            Console.WriteLine("Even Elements: {0}", evenElements);

            var totalStudents = studentArray.Count();

            Console.WriteLine("Total Students: {0}", totalStudents);

            var adultStudents = studentArray.Count(s => s.Age >= 18);

            Console.WriteLine("Number of Adult Students: {0}", adultStudents);

            Console.WriteLine();
            Console.WriteLine("Count using Query syntax:");
            var totalAdults = (from s in studentArray
                               where s.Age>=18
                               select s.Age).Count();
            Console.WriteLine(totalAdults);

            // Max
            Console.WriteLine();
            Console.WriteLine("Max:");
            var largest = intList.Max();

            Console.WriteLine("Largest Element: {0}", largest);

            var largestEvenElements = intList.Max(i => {
                if (i % 2 == 0)
                    return i;

                return 0;
            });

            Console.WriteLine("Largest Even Element: {0}", largestEvenElements);

            var oldest = studentArray.Max(s => s.Age);

            Console.WriteLine("Oldest Student Age: {0}", oldest);

            var studentWithLongName = studentArray.Max();

            Console.WriteLine("Student ID: {0}, Student Name: {1}",
                                            studentWithLongName.StudentID, studentWithLongName.StudentName);

            // Sum
            Console.WriteLine();
            Console.WriteLine("Sum:");
            var total = intList.Sum();

            Console.WriteLine("Sum: {0}", total);

            var sumOfEvenElements = intList.Sum(i => {
                if (i % 2 == 0)
                    return i;

                return 0;
            });

            Console.WriteLine("Sum of Even Elements: {0}", sumOfEvenElements);

            var sumOfAge = studentArray.Sum(s => s.Age);

            Console.WriteLine("Sum of all student's age: {0}", sumOfAge);

            var numOfAdults = studentArray.Sum(s => {

                if (s.Age >= 18)
                    return s.Age;
                else
                    return 0;
            });

            Console.WriteLine("Total Age of all Adult Students: {0}", numOfAdults);

            // ElementAt and ElementAtOrDefault
            Console.WriteLine();
            Console.WriteLine("ElementAt and ElementAtOrDefault:");
            IList<string> strList4 = new List<string>() { "One", "Two", null, "Four", "Five" };

            Console.WriteLine("1st Element in intList: {0}", intList.ElementAt(0));
            Console.WriteLine("1st Element in strList: {0}", strList4.ElementAt(0));

            Console.WriteLine("2nd Element in intList: {0}", intList.ElementAt(1));
            Console.WriteLine("2nd Element in strList: {0}", strList4.ElementAt(1));

            Console.WriteLine("3rd Element in intList: {0}", intList.ElementAtOrDefault(2));
            Console.WriteLine("3rd Element in strList: {0}", strList4.ElementAtOrDefault(2));

            Console.WriteLine("10th Element in intList: {0} - default int value",
                            intList.ElementAtOrDefault(9));
            Console.WriteLine("10th Element in strList: {0} - default string value (null)",
                             strList4.ElementAtOrDefault(9));


            Console.WriteLine("intList.ElementAt(9) throws an exception: Index out of range");
            Console.WriteLine("-------------------------------------------------------------");
            //Console.WriteLine(intList.ElementAt(9));

            // First and FirstOrDefault
            Console.WriteLine();
            Console.WriteLine("First and FirstOrDefault:");
            IList<string> strList5 = new List<string>() { null, "Two", "Three", "Four", "Five" };
            IList<string> emptyList = new List<string>();

            Console.WriteLine("1st Element in intList: {0}", intList.First());
            Console.WriteLine("1st Even Element in intList: {0}", intList.First(i => i % 2 == 0));

            Console.WriteLine("1st Element in strList: {0}", strList5.First());

            Console.WriteLine("emptyList.First() throws an InvalidOperationException");
            Console.WriteLine("-------------------------------------------------------------");
            //Console.WriteLine(emptyList.First());

            Console.WriteLine("1st Element in intList: {0}", intList.FirstOrDefault());
            Console.WriteLine("1st Even Element in intList: {0}",
                                             intList.FirstOrDefault(i => i % 2 == 0));

            Console.WriteLine("1st Element in strList: {0}", strList5.FirstOrDefault());

            Console.WriteLine("1st Element in emptyList: {0}", emptyList.FirstOrDefault());

            //Console.WriteLine("1st Element which is greater than 250 in intList: {0}",
            //                    intList.First(i => i > 250));

            //Console.WriteLine("1st Even Element in intList: {0}",
            //                                strList5.FirstOrDefault(s => s.Contains("T")));

            
            Console.WriteLine("Last Element in intList: {0}", intList.Last());

            Console.WriteLine("Last Even Element in intList: {0}", intList.Last(i => i % 2 == 0));

            Console.WriteLine("Last Element in strList: {0}", strList5.Last());

            Console.WriteLine("emptyList.Last() throws an InvalidOperationException");
            Console.WriteLine("-------------------------------------------------------------");
            //Console.WriteLine(emptyList.Last());

            Console.WriteLine("Last Element in intList: {0}", intList.LastOrDefault());

            Console.WriteLine("Last Even Element in intList: {0}",
                                             intList.LastOrDefault(i => i % 2 == 0));

            Console.WriteLine("Last Element in strList: {0}", strList5.LastOrDefault());

            Console.WriteLine("Last Element in emptyList: {0}", emptyList.LastOrDefault());

            //Console.WriteLine("Last Element which is greater than 250 in intList: {0}",
            //                    intList.Last(i => i > 250));

            //Console.WriteLine("Last Even Element in intList: {0}",
            //                                strList.LastOrDefault(s => s.Contains("T")));

            // Single and SingleOrDefault
            Console.WriteLine();
            Console.WriteLine("Single and SingleOrDefault:");
            IList<int> oneElementList = new List<int>() { 7 };
            
            Console.WriteLine("The only element in oneElementList: {0}", oneElementList.Single());
            Console.WriteLine("The only element in oneElementList: {0}",
                         oneElementList.SingleOrDefault());

            Console.WriteLine("Element in emptyList: {0}", emptyList.SingleOrDefault());

            Console.WriteLine("The only element which is less than 10 in intList: {0}",
                         intList.Single(i => i < 10));

            //Followings throw an exception
            //Console.WriteLine("The only Element in intList: {0}", intList.Single());
            //Console.WriteLine("The only Element in intList: {0}", intList.SingleOrDefault());
            //Console.WriteLine("The only Element in emptyList: {0}", emptyList.Single());

            ////following throws error because list contains more than one element which is less than 100
            //Console.WriteLine("Element less than 100 in intList: {0}", intList.Single(i => i < 100));

            ////following throws error because list contains more than one element which is less than 100
            //Console.WriteLine("Element less than 100 in intList: {0}",
            //                                    intList.SingleOrDefault(i => i < 100));

            ////following throws error because list contains more than one elements
            //Console.WriteLine("The only Element in intList: {0}", intList.Single());

            ////following throws error because list contains more than one elements
            //Console.WriteLine("The only Element in intList: {0}", intList.SingleOrDefault());

            ////following throws error because list does not contains any element
            //Console.WriteLine("The only Element in emptyList: {0}", emptyList.Single());

            // SequenceEqual
            Console.WriteLine();
            Console.WriteLine("SequenceEqual:");
            IList<string> strList6 = new List<string>() { "One", "Two", "Three", "Four", "Three" };

            IList<string> strList7 = new List<string>() { "One", "Two", "Three", "Four", "Three" };

            bool isEqual = strList6.SequenceEqual(strList7); // returns true
            Console.WriteLine(isEqual);


            //Concat
            Console.WriteLine();
            Console.WriteLine("Concat:");
            IList<string> collection1 = new List<string>() { "One", "Two", "Three" };
            IList<string> collection2 = new List<string>() { "Five", "Six" };

            var collection3 = collection1.Concat(collection2);

            foreach (string str in collection3)
                Console.WriteLine(str);

            //DefaultIfEmpty
            Console.WriteLine();
            Console.WriteLine("DefaultIfEmpty:");
            var newList1 = emptyList.DefaultIfEmpty();
            var newList2 = emptyList.DefaultIfEmpty("None");

            Console.WriteLine("Count: {0}", newList1.Count());
            Console.WriteLine("Value: {0}", newList1.ElementAt(0));

            Console.WriteLine("Count: {0}", newList2.Count());
            Console.WriteLine("Value: {0}", newList2.ElementAt(0));

            Console.WriteLine();
            IList<Student> emptyStudentList = new List<Student>();

            var newStudentList1 = studentArray.DefaultIfEmpty(new Student());

            var newStudentList2 = studentArray.DefaultIfEmpty(new Student()
            {
                StudentID = 0,
                StudentName = ""
            });

            Console.WriteLine("Count: {0} ", newStudentList1.Count());
            Console.WriteLine("Student ID: {0} ", newStudentList1.ElementAt(0));

            Console.WriteLine("Count: {0} ", newStudentList2.Count());
            Console.WriteLine("Student ID: {0} ", newStudentList2.ElementAt(0).StudentID);

            //Empty
            Console.WriteLine();
            Console.WriteLine("Empty:");
            var emptyCollection1 = Enumerable.Empty<string>();
            var emptyCollection2 = Enumerable.Empty<Student>();

            Console.WriteLine("Count: {0} ", emptyCollection1.Count());
            Console.WriteLine("Type: {0} ", emptyCollection1.GetType().Name);

            Console.WriteLine("Count: {0} ", emptyCollection2.Count());
            Console.WriteLine("Type: {0} ", emptyCollection2.GetType().Name);

            //Range
            Console.WriteLine();
            Console.WriteLine("Range:");
            var intCollection = Enumerable.Range(10, 10);
            Console.WriteLine("Total Count: {0} ", intCollection.Count());

            for (int i = 0; i < intCollection.Count(); i++)
                Console.WriteLine("Value at index {0} : {1}", i, intCollection.ElementAt(i));

            //Repeat
            Console.WriteLine();
            Console.WriteLine("Repeat:");
            var intCollection1 = Enumerable.Repeat<int>(10, 10);
            Console.WriteLine("Total Count: {0} ", intCollection1.Count());

            for (int i = 0; i < intCollection1.Count(); i++)
                Console.WriteLine("Value at index {0} : {1}", i, intCollection1.ElementAt(i));

            //Distinct
            Console.WriteLine();
            Console.WriteLine("Distinct:");
            IList<string> strList3 = new List<string>() { "One", "Two", "Three", "Two", "Three" };

            IList<int> intList3 = new List<int>() { 1, 2, 3, 2, 4, 4, 3, 5 };

            var distinctList1 = strList3.Distinct();

            foreach (var str in distinctList1)
                Console.WriteLine(str);

            var distinctList2 = intList3.Distinct();

            foreach (var i in distinctList2)
                Console.WriteLine(i);

            Console.WriteLine();
            var distinctStudents = studentArray.Distinct(new StudentComparer());

            foreach (Student std in distinctStudents)
                Console.WriteLine(std.StudentName);

            // Except
            Console.WriteLine();
            Console.WriteLine("Except:");
            IList<string> strList8 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
            IList<string> strList9 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight" };

            var result8 = strList8.Except(strList9);

            foreach (string str in result8)
                Console.WriteLine(str);

            Console.WriteLine();
            IList<Student> studentList1 = new List<Student>() {
                new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
            };

            IList<Student> studentList2 = new List<Student>() {
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
            };

            var resultedCol = studentList1.Except(studentList2, new StudentComparer());

            foreach (Student std in resultedCol)
                Console.WriteLine(std.StudentName);

            // Intersect
            Console.WriteLine();
            Console.WriteLine("Intersect:");
            result = strList1.Intersect(strList2);

            foreach (string str in result)
                Console.WriteLine(str);

            Console.WriteLine();
            resultedCol = studentList1.Intersect(studentList2, new StudentComparer());

            foreach (Student std in resultedCol)
                Console.WriteLine(std.StudentName);

            // Union
            Console.WriteLine();
            Console.WriteLine("Union:");
            result = strList1.Union(strList2);

            foreach (string str in result)
                Console.WriteLine(str);

            Console.WriteLine();
            resultedCol = studentList1.Union(studentList2, new StudentComparer());

            foreach (Student std in resultedCol)
                Console.WriteLine(std.StudentName);

            // Skip and SkipWhile
            Console.WriteLine();
            Console.WriteLine("Skip:");
            var newList = strList.Skip(2);

            foreach (var str in newList)
                Console.WriteLine(str);

            Console.WriteLine();
            var resultList = strList.SkipWhile(s => s.Length < 4);

            foreach (string str in resultList)
                Console.WriteLine(str);

            Console.WriteLine();
            result = strList.SkipWhile((s, i) => s.Length > i);

            foreach (string str in result)
                Console.WriteLine(str);

            // Take & TakeWhile
            Console.WriteLine();
            Console.WriteLine("Take & TakeWhile:");
            newList = strList.Take(2);

            foreach (var str in newList)
                Console.WriteLine(str);

            Console.WriteLine();
            IList<string> strList10 = new List<string>() {
                                            "Three",
                                            "Four",
                                            "Five",
                                            "Hundred"  };

            result = strList10.TakeWhile(s => s.Length > 4);

            foreach (string str in result)
                Console.WriteLine(str);

            Console.WriteLine();
            resultList = strList.TakeWhile((s, i) => s.Length > i);

            foreach (string str in resultList)
                Console.WriteLine(str);

            // AsEnumerable & AsQueryable
            Console.WriteLine();
            Console.WriteLine("AsEnumerable, AsQueryable and Cast:");
            ReportTypeProperties(studentArray);
            ReportTypeProperties(studentArray.AsEnumerable());
            ReportTypeProperties(studentArray.AsQueryable());
            ReportTypeProperties(studentArray.Cast<Student>());

            Console.WriteLine();
            Console.WriteLine("ToArray, ToList and ToDictionary:");
            Console.WriteLine("strList type: {0}", strList.GetType().Name);

            string[] strArray = strList.ToArray<string>();// converts List to Array

            Console.WriteLine("strArray type: {0}", strArray.GetType().Name);

            IList<string> newList3 = strArray.ToList<string>(); // converts array into list

            Console.WriteLine("newList type: {0}", newList3.GetType().Name);

            //following converts list into dictionary where StudentId is a key
            IDictionary<int, Student> studentDict =
                                            studentArray.ToDictionary<Student, int>(s => s.StudentID);

            foreach (var key in studentDict.Keys)
                Console.WriteLine("Key: {0}, Value: {1}",
                                            key, (studentDict[key] as Student).StudentName);

            // let 
            Console.WriteLine();
            Console.WriteLine("Let:");
            var lowercaseStudentNames = from s in studentArray
                                        let lowercaseStudentName = s.StudentName.ToLower()
                                        where lowercaseStudentName.StartsWith("r")
                                        select lowercaseStudentName;

            foreach (var name in lowercaseStudentNames)
                Console.WriteLine(name);

            // Into
            Console.WriteLine();
            Console.WriteLine("Into:");
            var teenAgerStudents5 = from s in studentArray
                                   where s.Age > 12 && s.Age < 20
                                   select s
                                    into teenStudents
                                   where teenStudents.StudentName.StartsWith("R")
                                   select teenStudents;

            foreach (var item in teenAgerStudents5)
            {
                Console.WriteLine(item.StudentName);
            }

            Console.WriteLine();

            // Expression
            Console.WriteLine("Expression, Checking age of student:");
            Expression<Func<Student, bool>> isTeenAgerExpr = s => s.Age > 12 && s.Age < 20;

            //compile Expression using Compile method to invoke it as Delegate
            Func<Student, bool> isTeenAger = isTeenAgerExpr.Compile();


            //Invoke
            bool result11 = isTeenAger(new Student() { StudentID = 1, StudentName = "Steve", Age = 18 });
            Console.WriteLine(result11);

            Console.WriteLine();

            // Expression Tree
            Console.WriteLine("Expression Tree:");
            ParameterExpression pe = Expression.Parameter(typeof(Student), "s");
            MemberExpression me = Expression.Property(pe, "Age");
            ConstantExpression constant = Expression.Constant(18, typeof(int));
            BinaryExpression body = Expression.GreaterThanOrEqual(me, constant);
            var ExpressionTree = Expression.Lambda<Func<Student, bool>>(body, new[] { pe });

            Console.WriteLine("Expression Tree: {0}", ExpressionTree);

            Console.WriteLine("Expression Tree Body: {0}", ExpressionTree.Body);

            Console.WriteLine("Number of Parameters in Expression Tree: {0}", ExpressionTree.Parameters.Count);

            Console.WriteLine("Parameters in Expression Tree: {0}", ExpressionTree.Parameters[0]);


            // Sample Questions

            Console.WriteLine();
            Console.WriteLine("Multiple Select & where operator:");
            var studentNames = studentArray.Where(s => s.Age > 18)
                              .Select(s => s)
                              .Where(st => st.StandardID > 0)
                              .Select(s => s.StudentName);

            foreach (var item in studentNames)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine();
            Console.WriteLine("LINQ Query to return collection of objects:");
            var teenStudentsName = from s in studentArray
                                   where s.Age > 12 && s.Age < 20
                                   select new { StudentName = s.StudentName };

            teenStudentsName.ToList().ForEach(s => Console.WriteLine(s.StudentName));

            Console.WriteLine();
            Console.WriteLine("Groupby on Standard wise students:");
            var studentsGroupByStandard = from s in studentArray
                                          group s by s.StandardID into sg
                                          orderby sg.Key
                                          select new { sg.Key, sg };


            foreach (var group in studentsGroupByStandard)
            {
                Console.WriteLine("StandardID {0}:", group.Key);

                group.sg.ToList().ForEach(st => Console.WriteLine(st.StudentName));
            }

            Console.WriteLine();
            Console.WriteLine("Include only those students who have standard assigned to them:");
            var studentsGroupByStandard1 = from s in studentArray
                                          where s.StandardID > 0
                                          group s by s.StandardID into sg
                                          orderby sg.Key
                                          select new { sg.Key, sg };

            foreach (var group in studentsGroupByStandard1)
            {
                Console.WriteLine("StandardID {0}:", group.Key);

                group.sg.ToList().ForEach(st => Console.WriteLine(st.StudentName));
            }

            Console.WriteLine();
            Console.WriteLine("Left outer join on Standard:");
            var studentsGroup = from stad in standardList
                                join s in studentArray
                                on stad.StandardID equals s.StandardID
                                    into sg
                                select new
                                {
                                    StandardName = stad.StandardName,
                                    Students = sg
                                };

            foreach (var group in studentsGroup)
            {
                Console.WriteLine(group.StandardName);

                group.Students.ToList().ForEach(st => Console.WriteLine(st.StudentName));
            }

            Console.WriteLine();
            Console.WriteLine("Perform sorting:");
            var studentsWithStandard = from stad in standardList
                                       join s in studentArray
                                       on stad.StandardID equals s.StandardID
                                       into sg
                                       from std_grp in sg
                                       orderby stad.StandardName, std_grp.StudentName
                                       select new
                                       {
                                           StudentName = std_grp.StudentName,
                                           StandardName = stad.StandardName
                                       };


            foreach (var group in studentsWithStandard)
            {
                Console.WriteLine("{0} is in {1}", group.StudentName, group.StandardName);
            }

            Console.WriteLine();
            Console.WriteLine("Nested Query:");
            var nestedQueries = from s in studentArray
                                where s.Age > 18 && s.StandardID ==
                                    (from std in standardList
                                     where std.StandardName == "Standard 1"
                                     select std.StandardID).FirstOrDefault()
                                select s;

            nestedQueries.ToList().ForEach(s => Console.WriteLine(s.StudentName));

        }
    }
}
