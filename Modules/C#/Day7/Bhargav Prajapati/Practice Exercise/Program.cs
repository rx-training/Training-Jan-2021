using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
namespace Practice_Exercise
{
    public class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }

        
    }
    class StudentComparer : IEqualityComparer<Student>
    {
        public bool Equals(Student x, Student y)
        {
            if (x.StudentId == y.StudentId && x.StudentName.ToLower() == y.StudentName.ToLower())
                return true;

            return false;
        }

        public int GetHashCode(Student obj)
        {
            return obj.StudentId.GetHashCode();
        }
    }
    class Person
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
    class People
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public int StanderdId { get; set; }
    }
    class Standard
    {
        public int StandardId { get; set; }
        public string StandardName { get; set; }
    }


    class Program
    {
        static void Main(string[] args)
        {
            List<Student> liststudent = new List<Student>() {
                new Student{ StudentId=1,StudentName="parth",Age=17},
                new Student{ StudentId=2,StudentName="karan", Age=22},
                new Student{ StudentId=3,StudentName="jenil",Age=24 },
                new Student{ StudentId=4,StudentName="kasim",Age=16},
                new Student{ StudentId=5,StudentName="bhavik",Age=12},
                new Student{ StudentId=6,StudentName="akash", Age=22},
                new Student{ StudentId=7,StudentName="vishw",Age=24 },
                new Student{ StudentId=8,StudentName="gunjan",Age=12 }

            };

            




            var result = from listofstudent in liststudent
                         where listofstudent.Age > 18 && listofstudent.Age < 30
                         select listofstudent;
            /*Linq Query Syntex*/
            Console.WriteLine("Linq Query Syntex");
            foreach (var item in result)
            {
                Console.WriteLine($"  Student Id :-  {item.StudentId}  Student Name :-  {item.StudentName}  Student Age :-  {item.Age}  ");
            }
            /*Linq Query  Method*/
            var result1 = liststudent.Where(s => s.Age > 18 && s.Age < 30).ToList<Student>();
            Console.WriteLine("Linq Query Method");
            foreach (var item in result1)
            {
                Console.WriteLine($"  Student Id :-  {item.StudentId}  Student Name :-  {item.StudentName}  Student Age :-  {item.Age}  ");
            }


            /*Where Clause*/
            Console.WriteLine("Where Clause ");
            var whereclause = from useofwhereclaus in liststudent
                              where useofwhereclaus.Age > 16
                              select useofwhereclaus.StudentName;
            foreach (var item in whereclause)
            {
                Console.WriteLine($"  Name Of the student Whose Age is Greter than 20 :-  {item} ");
            }

            /*OfType Query Syntex*/
            ArrayList mixeddata = new ArrayList();
            mixeddata.Add("Bhargav");
            mixeddata.Add("Prajapati");
            mixeddata.Add(1);
            mixeddata.Add(2);
            mixeddata.Add(new Student() { StudentId = 6, StudentName = "Ankit", Age = 25 });

            Console.WriteLine("Oftype  Query Syntex");
            var oftype1 = from stringdata in mixeddata.OfType<string>()
                          select stringdata;
            foreach (var item in oftype1)
            {
                Console.WriteLine($"  String type Data :- {item}");
            }

            var oftype2 = from intdata in mixeddata.OfType<int>() select intdata;
            foreach (var item in oftype2)
            {
                Console.WriteLine($"  Integer type Data :- {item}");
            }


            var oftype3 = from objectdata in mixeddata.OfType<Student>() select objectdata;
            foreach (var item in oftype3)
            {
                Console.WriteLine($"  Object-type Data :- {item.StudentId}");
                Console.WriteLine($"  Object-type Data :- {item.StudentName}");
                Console.WriteLine($"  Object-type Data :-{item.Age}");
            }

            //order by clause
            Console.WriteLine("Order By Clause ");
            Console.WriteLine("");
            Console.WriteLine("Ascending Order :-");
            var assendingorder = from assendingorderdata in liststudent
                                 orderby assendingorderdata.StudentId
                                 select assendingorderdata;
            foreach (var item in assendingorder)
            {
                Console.WriteLine($"  Student Id :-  {item.StudentId}  Student Name :-  {item.StudentName}  Student Age :-  {item.Age}  ");
            }

            Console.WriteLine("");
            Console.WriteLine("Descending Order :-");
            var descendingorder = from descendingorderdata in liststudent
                                  orderby descendingorderdata.StudentId descending
                                  select descendingorderdata;
            foreach (var item in descendingorder)
            {
                Console.WriteLine($"  Student Id :-  {item.StudentId}  Student Name :-  {item.StudentName}  Student Age :-  {item.Age}  ");
            }
            Console.WriteLine("Descending Order  Using Query Method:-");

            var methoddescorder = liststudent.OrderByDescending(s => s.StudentId);
            foreach (var item in methoddescorder)
            {
                Console.WriteLine($"  Student Id :-  {item.StudentId}  Student Name :-  {item.StudentName}  Student Age :-  {item.Age}  ");
            }


            // then by method
            Console.WriteLine("then by method:-");

            var thenbymethod = liststudent.OrderByDescending(s => s.StudentId).ThenByDescending(s => s.Age);

            foreach (var item in thenbymethod)
            {
                Console.WriteLine($"  Student Id :-  {item.StudentId}  Student Name :-  {item.StudentName}  Student Age :-  {item.Age}  ");
            }

            //group by  clause

            Console.WriteLine("Group By ");

            var groupbyclause = from groupbydata in liststudent
                                orderby groupbydata.Age
                                select groupbydata;

            foreach (var item in groupbyclause)
            {
                Console.WriteLine($"  Age of the student :-  {item.Age}");

                Console.WriteLine($"  Name Of The Student :- {item.StudentName}");

            }

            Console.WriteLine("Group By Using Query Method :-");
            var gp = liststudent.GroupBy(s => s.Age);
            foreach (var item in gp)
            {
                Console.WriteLine($"  Age of the student :-  {item.Key}");
                foreach (Student s in item)
                {
                    Console.WriteLine($"  Name Of The Student :- {s.StudentName}");
                }
            }

            // To Lookup Method
            Console.WriteLine("ToLookup Method ");
            var TolookupMethod = liststudent.ToLookup(groupbyage => groupbyage.Age);
            foreach (var item in TolookupMethod)
            {
                Console.WriteLine($"  Age Of The Student :- {item.Key}");
                foreach (Student s in item)
                {
                    Console.WriteLine($"  Name Of The Student :- {s.StudentName}");
                }
            }


            // Select Clause 

            Console.WriteLine("Select Clause :-");
            var selectclause = from selectdata in liststudent select new { Name = "MR.  " + selectdata.StudentName, Age = selectdata.Age };
            foreach (var item in selectclause)
            {
                Console.WriteLine($"  Name Of Student :- {item.Name}  Age Of The Student :- {item.Age}");
            }

            //Select using method
            Console.WriteLine(" ");
            Console.WriteLine("Select Method :-");
            var selectmethod = liststudent.Select(adddata => new { Name = "MR. " + adddata.StudentName, Age = adddata.Age });
            foreach (var item in selectmethod)
            {
                Console.WriteLine($"  Name Of Student :- {item.Name}  Age Of The Student :- {item.Age}");
            }


            // All Operator 
            Console.WriteLine("All Method :-");
            var result2 = liststudent.All(p => p.Age > 18 && p.Age < 50);
            Console.WriteLine($"  Result Of All Method :- {result2}");

            //Any Operator
            var result3 = liststudent.Any(data => data.Age > 18 && data.Age < 50);
            Console.WriteLine($" Result Of Any  Method :- {result3}");

            //Contains Method
            List<int> numbers = new List<int>() { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };

            Console.WriteLine("Contains Method :-");
            var res1 = numbers.Contains(10);
            Console.WriteLine($"  Result Of Contains Method :-  {res1}");
            var res2 = numbers.Contains(55);
            Console.WriteLine($"  Result Of Contains Method :-  {res2}");


            //average method 
            Console.WriteLine("Average Method :-");
            var avg = liststudent.Average(s => s.Age);
            Console.WriteLine($"  Averege Age Of The Student is :- {avg}");

            //Count Method 
            Console.WriteLine("Count Method :- ");
            var cnt = liststudent.Count(p => p.Age > 15);
            Console.WriteLine($"  Number Of Student :- {cnt}");

            //min max method 

            Console.WriteLine("Min And Max Marthod");
            var min = liststudent.Min(p => p.Age);
            foreach (var item in liststudent)
            {
                if (item.Age == min)
                {
                    Console.WriteLine($"  Minimum Age Student Name :- {item.StudentName}");
                }
            }

            var max = liststudent.Max(q => q.Age);
            foreach (var item in liststudent)
            {
                if (item.Age == max)
                {
                    Console.WriteLine($"  Maximum Age Student Name :- {item.StudentName}");
                }
            }

            //sum method
            Console.WriteLine("Sum Method :-");
            var sum = liststudent.Sum(p => p.Age);
            Console.WriteLine($"totel Age Of  The Student  :- {sum}");

            // Single And SingleOrDefalut

            List<int> oneelementlist = new List<int> { 7 };
            List<int> moreelementlist = new List<int> { 7, 8, 9, 10, 11, 12 };
            List<int> emptylist = new List<int> { };


            Console.WriteLine("Single And SingleOrDefault Method :-");
            Console.WriteLine($"Single Method Result :- {oneelementlist.Single()}");
            Console.WriteLine($"SingleOrDefault Result :- {emptylist.SingleOrDefault()}");
            Console.WriteLine($"Single Method Result From Multiple Value :- {moreelementlist.Single(p => p > 11)}");


            //concatination methods
            Console.WriteLine("Concatination Methods");
            List<string> datanumber1 = new List<string>() { "One", "Two", "Three", "Four" };
            List<string> datanumber2 = new List<string>() { "Five", "Six", "Seven", "Eight" };
            Console.WriteLine("  Concat the two list :-");
            var datanumber3 = datanumber1.Concat(datanumber2);
            foreach (var item in datanumber3)
            {
                Console.WriteLine("  " + item);
            }

            //Defalut if Empty Method

            Console.WriteLine("Default If Empty Method :-");

            List<Person> people = new List<Person>();

            var emptylist1 = people.DefaultIfEmpty();
            Console.WriteLine($"  Count :- {emptylist1.Count()}");
            Console.WriteLine($"  value :- {emptylist1.ElementAt(0)}");

            var emptylist2 = people.DefaultIfEmpty(new Person { ID = 1, Name = "Bhargav" });

            Console.WriteLine($"  Count :- {emptylist2.Count()}");
            Console.WriteLine($"  Value :- {emptylist2.ElementAt(0).Name}");


            //Except clause 
            Console.WriteLine("Except Clause :-");

            List<Student> listdata2 = new List<Student>() { new Student{ StudentId=1,StudentName="Parth",Age=17},
                new Student{ StudentId=2,StudentName="Karan", Age=22}, new Student{ StudentId=15,StudentName="XYZ",Age=68} };



            var resultset = liststudent.Except(listdata2, new StudentComparer());


            foreach (var item in resultset)
            {
                Console.WriteLine("=============================");
                Console.WriteLine($"  Id :- {item.StudentId}");
                Console.WriteLine($"  Name :- {item.StudentName}");
                Console.WriteLine($"  Age :- {item.Age}");

            }



            Console.WriteLine("");
            Console.WriteLine("Intersect  Clause :-");

            var resultset1 = listdata2.Intersect(liststudent, new StudentComparer());


            foreach (var item in resultset1)
            {
                Console.WriteLine("=============================");
                Console.WriteLine($"  Id :- {item.StudentId}");
                Console.WriteLine($"  Name :- {item.StudentName}");
                Console.WriteLine($"  Age :- {item.Age}");

            }

            Console.WriteLine(" ");
            Console.WriteLine("Intersect  Clause :-");

            var resultset3 = listdata2.Union(liststudent, new StudentComparer());


            foreach (var item in resultset3)
            {
                Console.WriteLine("=============================");
                Console.WriteLine($"  Id :- {item.StudentId}");
                Console.WriteLine($"  Name :- {item.StudentName}");
                Console.WriteLine($"  Age :- {item.Age}");

            }

            //Tack Method
            Console.WriteLine("Tack Method :-");

            List<string> stringdata2 = new List<string>() { "One", "Two", "Three", "Four", "Five", "Six", "Seven" };

            var tackdata = stringdata2.Take(3);
            foreach (var item in tackdata)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("Tack While Method :-");
            List<string> strList = new List<string>() {
                                            "Three",
                                            "Four",
                                            "Five",
                                            "Hundred"  };

            var result123 = strList.TakeWhile(s => s.Length > 4);

            foreach (string str in result123)
            {
                Console.WriteLine(str);
            }


            //Immediate Execution
            Console.WriteLine("Immediate Execution :-");

            var agestudent = (from age in liststudent
                              where age.Age > 15 && age.Age < 30
                              select age).ToList();
            foreach (var item in agestudent)
            {
                Console.WriteLine("==================================");
                Console.WriteLine($"  Id Of The Student :- {item.StudentId}");
                Console.WriteLine($"  Name Of The Student :- {item.StudentName}");
                Console.WriteLine($"  Age Of The Student :- {item.Age}");
            }

            //let Keyword
            Console.WriteLine("Let KeyWord :-");

            var lowercaseName = from i in liststudent
                                let lowercasename = i.StudentName.ToLower()
                                where lowercasename.StartsWith('k')
                                select i;
            foreach (var item in lowercaseName)
            {
                Console.WriteLine($"  Name Start With k  :- {item.StudentName}");
            }


            // Into KeyWord
            Console.WriteLine("Into KeyWord :- ");

            var intokeyword = from i in listdata2
                              where i.Age > 16
                              select i
                              into name
                              where name.StudentName.StartsWith('K')
                              select name;
            foreach (var item in intokeyword)
            {

                Console.WriteLine($"  Id Of The Student : {item.StudentId}");
                Console.WriteLine($"  Name Of The Student : {item.StudentName}");
                Console.WriteLine($"  Age Of The Student : {item.Age}");

            }

            //inner Join
            List < People > peoplelist = new List<People>() { new People { StudentId=1,StudentName="Bhargav",StanderdId=1 },
                                                              new People { StudentId=2,StudentName="Parth",StanderdId=1 }, 
                                                              new People { StudentId=3,StudentName="Jenil",StanderdId=2},
                                                              new People{ StudentId=4,StudentName="Bhavik",StanderdId=2},
                                                              new People{ StudentId=5,StudentName="Kasim"}
                                                            };
            List<Standard> sandardlist = new List<Standard>() { new Standard { StandardId=1,StandardName= "Standard1" },
                                                                new Standard{ StandardId=2,StandardName="Standard2"},
                                                                new Standard{ StandardId=3,StandardName="Standard3"}
                                                              };
            Console.WriteLine("Inner Join Operation");

            var innerjoin = peoplelist.Join(sandardlist,
                                            p=>p.StanderdId,
                                            q=>q.StandardId,
                                            (student,standard)=> new
                                            {
                                                StudentName=student.StudentName,
                                                StandardName=standard.StandardName
                                            }
                                            );
            foreach (var item in innerjoin)
            {
                Console.WriteLine("=====================Inner Join Operation========================");
                Console.WriteLine($"Name Of The Student :- {item.StudentName}");
                Console.WriteLine($"Standard Of The Student :- {item.StandardName}");
            }

            //Join Using Query Syntex

            var innerjoinquery = from pe in peoplelist
                                 join st in sandardlist on pe.StanderdId equals st.StandardId
                                 select new
                                 {
                                     StudentName = pe.StudentName,
                                     StandardName = st.StandardName
                                 };
            foreach (var item in innerjoinquery)
            {
                Console.WriteLine("=====================Inner Join Operation Using Query========================");
                Console.WriteLine($"  Name Of The Student :- {item.StudentName}");
                Console.WriteLine($"  Standard Of The Student :- {item.StandardName}");
            }

            //Group Join
            Console.WriteLine("Group Join");
            var groupjoin = sandardlist.GroupJoin(peoplelist,
                                                    pt=>pt.StandardId,
                                                    st=>st.StanderdId,
                                                    (std,studentgroup)=>new
                                                    {
                                                       Student=studentgroup,
                                                       studentfullNmae=std.StandardName
                                                    }
                                                    );




            foreach (var item in groupjoin)
            {
                Console.WriteLine(item.studentfullNmae);

                foreach (var stud in item.Student)
                    Console.WriteLine(stud.StudentName);
            }

            //group join using  query syntex

            Console.WriteLine("group join using  query syntex");

            var groupjoinquery = from p in sandardlist
                                 join s in peoplelist on p.StandardId equals s.StanderdId into gropdata
                                 select new
                                 {
                                     Students = gropdata,
                                     StandardName = p.StandardName
                                 };
            foreach (var item in  groupjoinquery)
            {
                Console.WriteLine($"Standard Name = {item.StandardName}");
                foreach (var  data in item.Students)
                {
                    Console.WriteLine($"Student Name :- {data.StudentName}");
                }
            }

            //Aggrigate :-
            Console.WriteLine("Agrigate clause");
            var camastudent = liststudent.Aggregate<Student, string>
                (
                    "Student Names :-",(str,s)=>str+=s.StudentName+","
                );
            Console.WriteLine($"{camastudent}");



        }
    }
}

