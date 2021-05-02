using System;
using System.Linq;
using System.Collections.Generic;
namespace Linqprac
{
    class Program
    {
        
        static void Main(string[] args)
        {
            

            IList<Student> studentList = new List<Student>() {
            new Student() { StudentID = 1, StudentName = "John", Age = 18 ,StandardID = 1},
            new Student() { StudentID = 2, StudentName = "Steve",  Age = 21,StandardID = 2 },
            new Student() { StudentID = 3, StudentName = "Bill",  Age = 25,StandardID = 3 },
            new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 ,StandardID = 2 },
            new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 ,StandardID = 1 },
            new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 ,StandardID = 3 },
            new Student() { StudentID = 7, StudentName = "Rob",Age = 19 ,StandardID = 2  },
            new Student() { StudentID = 8, StudentName = "Mikki",Age = 21 ,StandardID = 3  }
            };

            IList<Standard> secondlist = new List<Standard>() {
                new Standard(){ StandardID = 1, StandardName="Standard 1"},
                new Standard(){ StandardID = 2, StandardName="Standard 2"},
                new Standard(){ StandardID = 3, StandardName="Standard 3"}
            };


            
            // LINQ Query Syntax to find out adult students using where
            var AdultStudent = from student in studentList
                                  where student.Age < 18
                                  select student;
            Console.WriteLine("Adult Student :");
            
            foreach (Student std in AdultStudent)
            {
                Console.WriteLine(std.StudentName);
            }


            // LINQ Query Syntax to find out adult students using oftype
            var Studentoftype = from student in studentList.OfType<Student>()
                               select student;

            //var stringResult = studentList.OfType<student>(); Method Syntax

            Console.WriteLine("hello this is oftype  variable");
            foreach (var std in Studentoftype)
            {
                Console.WriteLine(std.StudentName+""+std.Age);
            }

            // LINQ Query Syntax to find out  students using OrderBy
            // Orderby:- Sorts the elements in the collection based on specified fields in 
            //    ascending or decending order.

            var orderbystudentAsc = from st in studentList
                                    orderby st.Age
                                    select st;
            
            Console.WriteLine("order by Assending order");
            foreach (var item in orderbystudentAsc)
            {
                Console.WriteLine(item.StudentName);
            }

            //OrderByDescending:- Sorts the collection based on specified 

            // var orderbystudentAsc = from st in studentList
            //                        orderby st.Age descending
            //                      select st;

            //   fields in descending order. Only valid in method syntax.

            var studentsInAscOrder = studentList.OrderBy(s => s.StudentName);
            var studentsInDescOrder = studentList.OrderByDescending(s => s.StudentName);


            // LINQ Query Syntax to find out adult students using GroupBy,ToLookup
            // GroupBy:-The GroupBy operator returns groups of elements based on some
            //   key value.Each group is represented by IGrouping < TKey, TElement > object.
            Console.WriteLine("working grop by");

            var groupedResult = from s in studentList
                                group s by s.Age;

            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key); //Each group has a key 

                foreach (Student s in ageGroup) // Each group has inner collection
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }
            // LINQ Query Syntax to find out  students using Join
            Console.WriteLine("join for two query");
            var innerJoinResult = studentList.Join( 
                      secondlist, 
                      student => student.StudentID,    // outerKeySelector
                      standard => standard.StandardID,  // innerKeySelector
                      (student, standard) => new  // result selector
                      {
                          StudentName = student.StudentName,
                          StandardName = standard.StandardName
                      });
            foreach (var obj in innerJoinResult)
            {
                Console.WriteLine("{0} - {1}", obj.StudentName, obj.StandardName);
            }

            // LINQ Query Syntax to find out  students using GroupJoin
            Console.WriteLine("GroupJoin is use");
            //var groupJoin = secondlist.GroupJoin(studentList,  //inner sequence
            //                    std => std.StandardID, //outerKeySelector 
            //                    s => s.StandardID,     //innerKeySelector
            //                    (std, studentsGroup) => new // resultSelector 
            //                    {
            //                        Students = studentsGroup,
            //                        StandarFulldName = std.StandardName
            //                    });

            var groupJoin = from std in secondlist
                            join s in studentList
                            on std.StandardID equals s.StandardID
                            into studentGroup
                            select new
                            {
                                Students = studentGroup,
                                StandardName = std.StandardName
                            };


            foreach (var item in groupJoin)
            {
                Console.WriteLine(item.StandardName);

                foreach (var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
            }


            // LINQ Query Syntax to find out students using Select
            Console.WriteLine();
            Console.WriteLine("select oprator");


            var selectResult = from s in studentList
                               select s.StudentName;
            // LINQ Query Syntax to find out adult students using All/Any
            Console.WriteLine();
            Console.WriteLine("All oprator");

            bool areAllStudents = studentList.All(s => s.Age < 18);

            Console.WriteLine(areAllStudents);

            Console.WriteLine();
            Console.WriteLine("any oprator");
            bool isAnyStudentAger = studentList.Any(d => d.Age == 21 || d.Age == 20);

            Console.WriteLine(isAnyStudentAger);

            // LINQ Query Syntax to find  using Contains
            Console.WriteLine();
            Console.WriteLine("Constrain Oprator");
            IList<int> intList = new List<int>() { 1, 2, 3, 4, 5 };
            bool result = intList.Contains(10);

            // LINQ Query Syntax to find out adult students using Aggregate
            Console.WriteLine();
            Console.WriteLine("Aggregate Oprator");

            string commaSepStudentName = studentList.Aggregate<Student, string>(
                                        "Student Names: ",  // seed value
                                        (str, s) => str += s.StudentName + ",");

            Console.WriteLine(commaSepStudentName);
            // LINQ Query Syntax to find out adult students using Count
            Console.WriteLine();
            Console.WriteLine("Average Oprator");
            var avg = intList.Average();

            Console.WriteLine("Average: {0}", avg);



            //  Single/SingleorDefault
            Console.WriteLine();
            Console.WriteLine("Aggregate Oprator");


            // DefaultIfEmpty
            Console.WriteLine();
            Console.WriteLine("Aggregate Oprator");

            IList<string> emptyList = new List<string>();

            var newList1 = emptyList.DefaultIfEmpty();
            var newList2 = emptyList.DefaultIfEmpty("None");

            Console.WriteLine("Count: {0}", newList1.Count());
            Console.WriteLine("Value: {0}", newList1.ElementAt(0));

            Console.WriteLine("Count: {0}", newList2.Count());
            Console.WriteLine("Value: {0}", newList2.ElementAt(0));

            // Intersect/Union/Take,TakeWhile
            Console.WriteLine();
            Console.WriteLine("Intersect");
            IList<string> strList1 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
            IList<string> strList2 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight" };

            var resultintersec = strList1.Intersect(strList2);

            foreach (string str in resultintersec)
                Console.WriteLine(str);

            Console.WriteLine();
            Console.WriteLine("Unioun");
            var resultunioun = strList1.Union(strList2);

            foreach (string str in resultunioun)
                Console.WriteLine(str);

            Console.WriteLine();
            Console.WriteLine("Take");
            var newList = strList1.Take(2);

            foreach (var str in newList)
                Console.WriteLine(str);

            Console.WriteLine();
            Console.WriteLine("Takewhile");
            var resulttakewhile = strList1.TakeWhile(s => s.Length > 4);

            foreach (string str in resulttakewhile)
                Console.WriteLine(str);
            
            

            // Into Keyword
            Console.WriteLine();
            Console.WriteLine("INFO key");
            var teenAgerStudents = from s in studentList
                                   where s.Age > 12 && s.Age < 20
                                   select s
        into teenStudents
                                   where teenStudents.StudentName.StartsWith("B")
                                   select teenStudents;

            foreach (Student std in teenAgerStudents)
            {
                Console.WriteLine(std.StudentName);
            }
        }
    }
}
