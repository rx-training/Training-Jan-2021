using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Day7_Practice
{

    public class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
        public char DivisionID { get; set; }
    }

    public class Division
    {
        public char DivisionID { get; set; }
        public string DivisionName { get; set; }
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

     static class EnumerableExtensionMethods
    {
        public static IEnumerable<Student> GetTeenAgerStudents(this IEnumerable<Student> source)
        {

            foreach (Student std in source)
            {
                Console.WriteLine("Accessing student {0}", std.StudentName);

                if (std.Age > 12 && std.Age < 20)
                    yield return std;
            }
        }
    }

    class Program
    {

        static void Main(string[] args)
        {
            IList<Student> studentList = new List<Student>() {
                new Student() { StudentID = 1, StudentName = "John", Age = 13, DivisionID = 'A'} ,
                new Student() { StudentID = 2, StudentName = "Moin",  Age = 21, DivisionID = 'B' } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, DivisionID = 'A' } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, DivisionID = 'A'} ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 15, DivisionID = 'B' }
            };

            IList<Student> studentList2 = new List<Student>() {
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, DivisionID = 'A' } ,
                new Student() { StudentID = 5, StudentName = "Ron"  , Age = 15, DivisionID = 'B' }
            };

            IList<Division> standardList = new List<Division>() {
                new Division(){ DivisionID = 'A', DivisionName="Division A"},
                new Division(){ DivisionID ='B', DivisionName="Division B"}
            };

            // LINQ Query Syntax 
            var teenAgerStudentQ = from s in studentList
                                   where s.Age > 12 && s.Age < 20
                                   orderby s.StudentName
                                   select s;

            // LINQ Method Syntax 
            var teenAgerStudentM = studentList.ToList<Student>()
                                              .OrderByDescending(s => s.StudentName)
                                              .ThenByDescending(s => s.Age);

            Console.WriteLine("Query Syntax output : ");
            foreach (var item in teenAgerStudentQ)
            {
                Console.WriteLine(item.StudentID + " " + item.StudentName + " " + item.Age + " " + item.DivisionID);
            }
            Console.WriteLine();

            Console.WriteLine("Method Syntax output : ");
            foreach (var item in teenAgerStudentM)
            {
                Console.WriteLine(item.StudentID + " " + item.StudentName + " " + item.Age);
            }
            Console.WriteLine();


            // OfType 
            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });

            var stringResult = from s in mixedList.OfType<string>()
                               select s;
            // var stringResult = mixedList.OfType<string>();   Method Syntax

            var intResult = from s in mixedList.OfType<int>()
                            select s;

            Console.WriteLine("OfType : ");
            foreach (var item in stringResult)
            {
                Console.WriteLine("String - " + item);
            }
            foreach (var item in intResult)
            {
                Console.WriteLine("Int - " + item);
            }
            Console.WriteLine();


            // Group by 
            var groupedResult = from s in studentList
                                group s by s.DivisionID;
            // var groupedResult = studentList.GroupBy(s => s.Age);  Method Syntax

            Console.WriteLine("Group By : ");
            foreach (var div in groupedResult)
            {
                Console.WriteLine("Division : {0}", div.Key); //Each group has a key 

                foreach (Student s in div) // Each group has inner collection
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }
            Console.WriteLine();


            // To Look up 
            var lookupResult = studentList.ToLookup(s => s.DivisionID); // Method Syntax, not supported in Query suntax

            Console.WriteLine("To Look Up : ");
            foreach (var div in lookupResult)
            {
                Console.WriteLine("Division : {0}", div.Key); //Each group has a key 

                foreach (Student s in div) // Each group has inner collection
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }
            Console.WriteLine();


            // Join
            var innerJoin = studentList.Join(// outer sequence 
                      standardList,  // inner sequence 
                      student => student.DivisionID,    // outerKeySelector
                      standard => standard.DivisionID,  // innerKeySelector
                      (student, standard) => new  // result selector
                      {
                          StudentName = student.StudentName,
                          StandardName = standard.DivisionName
                      });

            Console.WriteLine("Inner Join : ");
            foreach (var item in innerJoin)
            {
                Console.WriteLine(item.StudentName + " " + item.StandardName);
            }
            Console.WriteLine();

            //var innerJoin = from s in studentList // outer sequence
            //                join st in standardList //inner sequence 
            //                on s.StandardID equals st.StandardID // key selector 
            //                select new
            //                { // result selector 
            //                    StudentName = s.StudentName,
            //                    StandardName = st.StandardName
            //                };      Method Syntax


            // Group Join
            var groupJoin = standardList.GroupJoin(studentList,  //inner sequence
                                std => std.DivisionID, //outerKeySelector 
                                s => s.DivisionID,     //innerKeySelector
                                (std, studentsGroup) => new // resultSelector 
                                {
                                    Students = studentsGroup,
                                    StandarFulldName = std.DivisionName
                                });

            //var groupJoin = from std in standardList
            //                join s in studentList
            //                on std.StandardID equals s.StandardID
            //                into studentGroup
            //                select new
            //                {
            //                    Students = studentGroup,
            //                    StandardName = std.StandardName
            //                };

            Console.WriteLine("Group Join : ");
            foreach (var item in groupJoin)
            {
                Console.WriteLine(item.StandarFulldName);

                foreach (var stud in item.Students)
                    Console.WriteLine(stud.StudentName);
            }
            Console.WriteLine();


            // All
            bool areAllStudentsTeenAger = studentList.All(s => s.Age > 12 && s.Age < 20);
            Console.WriteLine("All() : ");
            Console.WriteLine(areAllStudentsTeenAger);
            Console.WriteLine();


            // Any
            bool isAnyStudentTeenAger = studentList.Any(s => s.Age > 12 && s.Age < 20);
            Console.WriteLine("Any() : ");
            Console.WriteLine(isAnyStudentTeenAger);
            Console.WriteLine();


            // Contains
            Student std = new Student() { StudentID = 3, StudentName = "Bill" };
            bool result = studentList.Contains(std, new StudentComparer());
            Console.WriteLine("Contains() : ");
            Console.WriteLine(result);
            Console.WriteLine();


            // Aggregate 
            Console.WriteLine("Aggregate : ");
            string commaSeparatedStudentNames = studentList.Aggregate<Student, string>(
                                        "Student Names: ",  // seed value
                                        (str, s) => str += s.StudentName + ",");

            Console.WriteLine(commaSeparatedStudentNames);
            Console.WriteLine();


            // Average
            var avgAge = studentList.Average(s => s.Age);
            Console.WriteLine("Average Age of Student: {0}", avgAge);
            Console.WriteLine();


            // Count
            var adultStudents = studentList.Count(s => s.Age >= 18);
            // var totalAge = (from s in studentList
            //              select s.age).Count();   Method Syntax

            Console.WriteLine("Count of Adult Students: {0}", adultStudents);
            Console.WriteLine();


            // Max
            var oldest = studentList.Max(s => s.Age);
            Console.WriteLine("Max() : ");
            Console.WriteLine("Oldest Student Age: {0}", oldest);
            Console.WriteLine();


            // Sum
            var sumOfAge = studentList.Sum(s => s.Age);

            Console.WriteLine("Sum of all student's age: {0}", sumOfAge);

            var numOfAdults = studentList.Sum(s =>
            {

                if (s.Age >= 18)
                    return 1;
                else
                    return 0;
            });

            Console.WriteLine("Total Adult Students: {0}", numOfAdults);
            Console.WriteLine();


            // Empty
            var emptyCollection2 = Enumerable.Empty<Student>();
            Console.WriteLine("Empty : ");
            Console.WriteLine("Count: {0} ", emptyCollection2.Count());
            Console.WriteLine("Type: {0} ", emptyCollection2.GetType().Name);
            Console.WriteLine();


            // Range
            var intCollection = Enumerable.Range(10, 10);
            Console.WriteLine("Range : ");
            Console.WriteLine("Total Count: {0} ", intCollection.Count());

            for (int i = 0; i < intCollection.Count(); i++)
                Console.WriteLine("Value at index {0} : {1}", i, intCollection.ElementAt(i));
            Console.WriteLine();


            // Repeat
            var intCollectionR = Enumerable.Repeat<int>(10, 10);
            Console.WriteLine("Repeat : ");
            Console.WriteLine("Total Count: {0} ", intCollectionR.Count());

            for (int i = 0; i < intCollectionR.Count(); i++)
                Console.WriteLine("Value at index {0} : {1}", i, intCollectionR.ElementAt(i));
            Console.WriteLine();


            // Intersect
            var resultedCol = studentList.Intersect(studentList2, new StudentComparer());
            Console.WriteLine("Intersect : ");
            foreach (Student std1 in resultedCol)
                Console.WriteLine(std1.StudentName);
            Console.WriteLine();


            // Union
            var resultedCol1 = studentList.Union(studentList2, new StudentComparer());
            Console.WriteLine("Union : ");
            foreach (Student std1 in resultedCol1)
                Console.WriteLine(std1.StudentName);
            Console.WriteLine();


            // Take
            var newList = studentList.Take(2);
            Console.WriteLine("Take() : ");
            foreach (var str in newList)
                Console.WriteLine(str.StudentName);
            Console.WriteLine();



            // Take While
            IList<string> strList = new List<string>() {
                                            "Three",
                                            "Four",
                                            "Five",
                                            "Hundred"  };

            var result1 = strList.TakeWhile(s => s.Length > 4);
            Console.WriteLine("Take While() : ");
            foreach (string str in result1)
                Console.WriteLine(str);
            Console.WriteLine();


            // Defferred Execution
            var teenAgerStudents = from s in studentList.GetTeenAgerStudents()
                                   select s;
            Console.WriteLine("Defferred Execution : ");
            foreach (Student teenStudent in teenAgerStudents)
                Console.WriteLine("Student Name: {0}", teenStudent.StudentName);
            Console.WriteLine();


            // Immediate Execution through ToList
            IList<Student> teenAgerStudents1 = studentList.Where(s => s.Age > 12 && s.Age < 20).ToList();
            Console.WriteLine("ToList() : ");
            foreach (Student teenStudent in teenAgerStudents1)
                Console.WriteLine("Student Name: {0}", teenStudent.StudentName);
            Console.WriteLine();


            // Let
            var lowercaseStudentNames = from s in studentList
                                        let lowercaseStudentName = s.StudentName.ToLower()
                                        where lowercaseStudentName.StartsWith("r")
                                        select lowercaseStudentName;
            Console.WriteLine("Let : ");
            foreach (var name in lowercaseStudentNames)
                Console.WriteLine(name);
            Console.WriteLine();


            // Into
            var teenAgerStudents2 = from s in studentList
                                   where s.Age > 12 && s.Age < 20
                                   select s
                                        into teenStudents
                                   where teenStudents.StudentName.StartsWith("B")
                                   select teenStudents;
            Console.WriteLine("Into : ");
            foreach (var name in teenAgerStudents2)
                Console.WriteLine(name.StudentName);
            Console.WriteLine();

        }
    }
}
