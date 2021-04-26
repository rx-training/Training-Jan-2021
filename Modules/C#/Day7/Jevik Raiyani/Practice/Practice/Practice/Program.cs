using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Practice
{
    public static class EnumerableExtensionMethods
    {
        public static IEnumerable<Student> GetTeenAgerStudents(this IEnumerable<Student> source)
        {

            foreach (Student std in source)
            {
                Console.WriteLine("Accessing student {0}", std.StudentName);

                if (std.age > 12 && std.age < 20)
                    yield return std;
            }
        }
    }
    public class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int StandardID { get; set; }
        public int age { get; set; }
    }

    public class Standard
    {
        public int StandardID { get; set; }
        public string StandardName { get; set; }
    }

    class Program 
    {
        static void Main(string[] args)
        {
            //string[] names = { "jevik", "pratik", "tirath", "sagar" };

            //var myLinqQuery = from name in names
            //                  where name.Contains('i')
            //                  select name;

            //foreach (var item in myLinqQuery)
            //{
            //    Console.WriteLine(item + " ");
            //}

            //var myLinquery1 = from p in names
            //                  where p.Contains('j')
            //                  select p;
            //foreach (var item in myLinquery1)
            //{
            //    Console.WriteLine(item);
            //}


            Student[] studentArray = {
                    new Student() { StudentID = 1, StudentName = "John", age = 18 } ,
                    new Student() { StudentID = 2, StudentName = "Steve",  age = 21 } ,
                    new Student() { StudentID = 3, StudentName = "Bill",  age = 25 } ,
                    new Student() { StudentID = 4, StudentName = "Ram" , age = 20 } ,
                    new Student() { StudentID = 5, StudentName = "Ron" , age = 31 } ,
                    new Student() { StudentID = 6, StudentName = "Chris",  age = 17 } ,
                    new Student() { StudentID = 7, StudentName = "Rob",age = 19  } ,
                };

            //Student[] teenAgerStudents = studentArray.Where(s => s.age > 12 && s.age < 20).ToArray();
            //Student bill = studentArray.Where(s => s.StudentName == "Bill").FirstOrDefault();
            //Student student5 = studentArray.Where(s => s.StudentID == 5).FirstOrDefault();

            //foreach (var item in teenAgerStudents)
            //{
            //    Console.WriteLine(item.StudentID +" " +item.StudentName+ " "+item.age);
            //}

            //Console.WriteLine(bill.StudentID + " " + bill.StudentName + " " + bill.age);


            //Console.WriteLine(student5.StudentID + " " + student5.StudentName + " " + student5.age);


            //IList<string> stringList = new List<string>() {
            //    "C# Tutorials",
            //    "VB.NET Tutorials",
            //    "Learn C++",
            //    "MVC Tutorials" ,
            //    "Java"
            //};


            //var result = from s in stringList
            //             where s.Contains("Tutorials")
            //             select s;

            //foreach (var item in result)
            //{
            //    Console.WriteLine(item);
            //}

            //var result1 = stringList.Where(s => s.Contains("Tutorials"));
            //foreach (var item in result1)
            //{
            //    Console.WriteLine(item);
            //}


            //IList<Student> studentList = new List<Student>() {
            //new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
            //new Student() { StudentID = 6, StudentName = "jevik", Age = 18 },
            //new Student() { StudentID = 2, StudentName = "Steve",  Age = 15 } ,
            //new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
            //new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
            //new Student() { StudentID = 5, StudentName = "Ron" , Age = 19 }
            //};

            //var filteredResult = studentList.Where((s, i) => {
            //    if (i % 2 == 0)
            //        return true;
            //    return false;
            //});

            //foreach (var item in filteredResult)
            //    Console.WriteLine(item.StudentName);

            //var aaa = studentList.Where(s => s.Age > 12 && s.Age < 20);
            //foreach (var item in aaa)
            //    Console.WriteLine(item.StudentName);

            //IList mixedList = new ArrayList();
            //mixedList.Add(0);
            //mixedList.Add("One");
            //mixedList.Add("Two");
            //mixedList.Add(3);
            //mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });

            //var stringResult = mixedList.OfType<string>();
            //var intResult = mixedList.OfType<int>();
            //foreach (var item in stringResult)
            //{
            //    Console.WriteLine(item);
            //}
            //foreach (var item in intResult)
            //{
            //    Console.WriteLine(item);
            //}

            //var orderby = studentList.OrderBy(s => s.StudentName);
            //foreach (var item in orderby)
            //{
            //    Console.WriteLine(item.StudentName);
            //}


            //var orderbydes = studentList.OrderByDescending(s => s.StudentName);
            //foreach (var item in orderbydes)
            //{
            //    Console.WriteLine(item.StudentName);
            //}
            //Console.WriteLine();

            //var orderby1 = studentList.OrderBy(s => s.StudentName).Where(s=>s.Age>18 );
            //foreach (var item in orderby1)
            //{
            //    Console.WriteLine(item.StudentName);
            //}

            //var groupbyage = studentList.GroupBy(s => s.Age);
            //foreach (var item in groupbyage)
            //{
            //    Console.WriteLine("age group " +item.Key);
            //    foreach (var p in item)
            //    {
            //        Console.WriteLine(p.StudentName);
            //    }
            //}
            //Console.WriteLine();

            ////tolookup and groupby same... but lookup use only Method Syntex not supppory query syntex
            //var lookupResult = studentList.ToLookup(s => s.Age);
            //foreach (var item in lookupResult)
            //{
            //    Console.WriteLine("age group " + item.Key);
            //    foreach (var p in item)
            //    {
            //        Console.WriteLine(p.StudentName);
            //    }
            //}


            //IList<string> strList1 = new List<string>() {
            //    "One",
            //    "Two",
            //    "Three",
            //    "Four"
            //};

            //IList<string> strList2 = new List<string>() {
            //    "One",
            //    "Two",
            //    "Five",
            //    "Six"
            //};

            //var innerjoin = strList1.Join(strList2, s1 => s1, s2 => s2, (s1, s2) => s1);
            //foreach (var item in innerjoin)
            //{
            //    Console.WriteLine(item);
            //}

            //IList<Student> studentList = new List<Student>() {
            //    new Student() { StudentID = 1, StudentName = "John", StandardID =1 },
            //    new Student() { StudentID = 2, StudentName = "Moin", StandardID =1 },
            //    new Student() { StudentID = 3, StudentName = "Bill", StandardID =2 },
            //    new Student() { StudentID = 4, StudentName = "Ram" , StandardID =2 },
            //    new Student() { StudentID = 5, StudentName = "Ron"  }
            //};

            //IList<Standard> standardList = new List<Standard>() {
            //    new Standard(){ StandardID = 1, StandardName="Standard 1"},
            //    new Standard(){ StandardID = 2, StandardName="Standard 2"},
            //    new Standard(){ StandardID = 3, StandardName="Standard 3"}
            //};

            //var innerjoin = studentList.Join(standardList,
            //                        s1 => s1.StandardID,
            //                        s2 => s2.StandardID,
            //                        (s1, s2) => new
            //                        {
            //                            StudentName = s1.StudentName,
            //                            StandardName = s2.StandardName
            //                        });

            //foreach (var item in innerjoin)
            //{
            //    Console.WriteLine(item.StudentName+" "+ item.StandardName);
            //}

            //var innerjoin1 = studentList.Join(standardList,
            //                       s1 => s1.StandardID,
            //                       s2 => s2.StandardID,
            //                       (s1, s2) =>(s1,s2)
            //                       );

            //foreach (var item in innerjoin1)
            //{
            //    Console.WriteLine(item.s1.StudentID + " " + item.s1.StudentName+" "+item.s1.StandardID+" "+item.s2.StandardID+" "+item.s2.StandardName);
            //}

            //var innerjoin2 = studentList.Join(standardList,
            //                       s1 => s1.StandardID,
            //                       s2 => s2.StandardID,
            //                       (s1, s2) => (s1.StudentID, s1.StudentName, s2.StandardName)
            //                       );

            //foreach (var item in innerjoin2)
            //{
            //    Console.WriteLine(item.StudentID +" " + item.StudentName + " " + item.StandardName);
            //}

            //           var groupJoin1 = from s1 in standardList
            //                join s2 in studentList
            //                on s1.StandardID equals s2.StandardID
            //                into studentGroup
            //                select new
            //                {
            //                    Students = studentGroup,
            //                    StandardName = s1.StandardName
            //                };

            //foreach (var item in groupJoin1)
            //{
            //    Console.WriteLine(item.StandardName);

            //    foreach (var p in item.Students)
            //        Console.WriteLine(p.StudentName);
            //}


            //var groupjoin = standardList.GroupJoin(studentList,
            //                      s1 => s1.StandardID,
            //                      s2 => s2.StandardID,
            //                      (s1, studentGroup) => new
            //                      {
            //                          students = studentGroup,
            //                          StandardFullName = s1.StandardName
            //                      });

            //foreach (var item in groupjoin)
            //{
            //    Console.WriteLine(item.StandardFullName);
            //    foreach (var p in item.students)
            //    {
            //        Console.WriteLine(p.StudentName);
            //    }
            //}

            //var select = studentList.Select(s => (s.StudentID, s.StudentName));
            //var select1 = studentList.Select(s => new
            //                                    {
            //                                       ID=  s.StudentID, 
            //                                       NAME = s.StudentName
            //                                    });

            //foreach (var item in select)
            //{
            //    Console.WriteLine(item.StudentID + " " + item.StudentName);
            //}
            //foreach (var item in select1)
            //{
            //    Console.WriteLine(item.ID + " " + item.NAME);
            //}

            //var select2 = from s in studentList
            //              select s;
            //foreach (var item in select2)
            //{
            //    Console.WriteLine(item.StudentName);
            //}

            //var select3 = studentList.Select(s => s);
            //foreach (var item in select3)
            //{
            //    Console.WriteLine(item.StudentName + " " + item.StandardID + "  " + item.StudentID);
            //}

            //var aaa = studentArray.All(s => s.age > 12 && s.age < 20);
            //Console.WriteLine(aaa);

            //var aaa1 = studentArray.Any(s => s.age > 12 && s.age < 20);
            //Console.WriteLine(aaa1);

            //var p = studentArray.Contains(studentArray[1]);
            //Console.WriteLine(p);

            //var aggri2 = studentArray.Aggregate<Student, string>("student Names:", (str, s) => str += s.StudentName +", ");
            //Console.WriteLine(aggri2);

            //var aggri0 = studentArray.Aggregate<Student, int>(0, (totalage, s) => totalage += s.age);
            //Console.WriteLine(aggri0);

            //var aggri11 = studentArray.Average(s=>s.age);
            //Console.WriteLine(aggri11);

            //var aggri12= studentArray.Count();
            //Console.WriteLine(aggri12);

            //var aggri13 = studentArray.Count(s=> s.age>18);
            //Console.WriteLine(aggri13);

            //var aggri14 = studentArray.Max(s => s.age);
            //Console.WriteLine(aggri14);


            //var aggri15 = studentArray.Sum(s => s.age);
            //Console.WriteLine(aggri15);

            //var totalAdult = studentArray.Sum(s => {
            //    if (s.age > 18)
            //        return 1;
            //    return 0; });
            //Console.WriteLine(totalAdult);



            //var v1 = studentArray.Single(s => s.StudentName=="John");
            //Console.WriteLine(v1.StudentID);

            //var v2 = studentArray.SingleOrDefault(s => s.StudentName == "jeik");
            //if(v2==null)
            //{ Console.WriteLine("not match"); }
            //else
            //Console.WriteLine(v2);

            //var v3 = studentArray.DefaultIfEmpty(new Student());
            //Console.WriteLine(v3.Count()+" "+v3.ElementAt(0).StudentID);

            //var v4 = studentArray.DefaultIfEmpty(new Student() { StudentID = 9, StudentName = "" });
            //Console.WriteLine(v4.Count()+ " "+v4.ElementAt(8).StudentID);

            //IList<string> strList1 = new List<string>() { "One", "Two", "Three", "Four", "Five" };
            //IList<string> strList2 = new List<string>() { "Four", "Five", "Six", "Seven", "Eight" };

            //var result = strList1.Intersect(strList2);

            //foreach (string str in result)
            //    Console.WriteLine(str);

            //var result2 = strList1.Union(strList2);
            //foreach (string str in result2)
            //    Console.WriteLine(str);


            //var newList = strList1.Take(2);

            //foreach (var str in newList)
            //    Console.WriteLine(str);

            //Console.WriteLine("-------------");

            //var newList1 = strList1.TakeWhile((s,i)=> s.Length>i);

            //foreach (var str in newList1)
            //    Console.WriteLine(str);


            IList<Student> studentList = new List<Student>() {
            new Student() { StudentID = 1, StudentName = "John", age = 13 } ,
            new Student() { StudentID = 2, StudentName = "Steve",  age = 15 } ,
            new Student() { StudentID = 3, StudentName = "Bill",  age = 18 } ,
            new Student() { StudentID = 4, StudentName = "Ram" , age = 12 } ,
            new Student() { StudentID = 5, StudentName = "Ron" , age = 21 }
        };

            //    var teenAgerStudents = from s in studentList.GetTeenAgerStudents()
            //                           select s;

            //    foreach (Student teenStudent in teenAgerStudents)
            //        Console.WriteLine("Student Name: {0}", teenStudent.StudentName);
            //


            //IList<Student> teenAgerStudents = 
            //        studentList.Where(s => s.age > 12 && s.age < 20).ToList();


            //var lowercaseStudentNames = from s in studentList
            //                            let lowercaseStudentName = s.StudentName.ToLower()
            //                            where lowercaseStudentName.StartsWith("r")
            //                            select lowercaseStudentName;

            //foreach (var name in lowercaseStudentNames)
            //    Console.WriteLine(name);

            var teenAgerStudents = from s in studentList
                                   where s.age > 12 && s.age < 20
                                   select s
                                    into teenStudents
                                   where teenStudents.StudentName.StartsWith("B")
                                   select teenStudents;
            foreach (var name in teenAgerStudents)
                Console.WriteLine(name.StudentName);

        }
    }
}
