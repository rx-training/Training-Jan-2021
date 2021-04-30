using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Practice
{
    class Student
    {
        public int StudentID { get; set; }
        public String StudentName { get; set; }
        public int Age { get; set; }
        public int StandardID { get; set; }
    }
    class StudentComparer : IEqualityComparer<Student>
    {
        public bool Equals(Student x, Student y)
        {
            if (x.StudentID == y.StudentID
                    && x.StudentName.ToLower() == y.StudentName.ToLower())
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
                    // yield keyword for differed exec.
                    yield return std;
            }
        }
    }
    class Program
    {
        static void ReportTypeProperties<T>(T obj)
        {
            Console.WriteLine("Compile-time type: {0}", typeof(T).Name);
            Console.WriteLine("Actual type: {0}", obj.GetType().Name);
        }
        static void Main(string[] args)
        {
            IList<Student> studentList = new List<Student>() {
                new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 } ,
                //new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 21, StandardID = 1 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID = 1 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID = 2 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 31, StandardID = 3 } ,
                new Student() { StudentID = 6, StudentName = "Chris",  Age = 17, StandardID = 3 } ,
                new Student() { StudentID = 7, StudentName = "Rob",Age = 19 } ,
            };

            IList<Student> studentList2 = new List<Student>() {
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 31, StandardID = 3 } ,
                new Student() { StudentID = 6, StudentName = "Chris",  Age = 17, StandardID = 3 } ,
                new Student() { StudentID = 8, StudentName = "Milit",  Age = 17, StandardID = 2 } ,
                new Student() { StudentID = 9, StudentName = "XYZ",  Age = 17, StandardID = 3 } ,
                new Student() { StudentID = 7, StudentName = "Rob",Age = 19 } ,
            };

            IList<Standard> standardList = new List<Standard>() {
                new Standard(){ StandardID = 1, StandardName="Standard 1"},
                new Standard(){ StandardID = 2, StandardName="Standard 2"},
                new Standard(){ StandardID = 3, StandardName="Standard 3"}
            };

            // method syntax
            var subset = studentList.Where(student => student.Age < 20);
            foreach (var item in subset)
            {
                Console.WriteLine(item.StudentID + " " + item.StudentName + " " + item.Age);
            }
            Console.WriteLine();

            // query syntax
            var set = from student in studentList
                      where student.Age > 20
                      select student;

            foreach (var item in set)
            {
                Console.WriteLine(item.StudentID + " " + item.StudentName + " " + item.Age);
            }
            Console.WriteLine();


            var groupJoin = standardList.GroupJoin(studentList,  //inner sequence
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
            //list with different types
            IList mixedList = new ArrayList();
            mixedList.Add(0);
            mixedList.Add("One");
            mixedList.Add("Two");
            mixedList.Add(3);
            mixedList.Add(new Student() { StudentID = 1, StudentName = "Bill" });

            // OfType
            var stringResult = from s in mixedList.OfType<string>()
                               select s;
            foreach (var item in stringResult)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();
            // order by and then by
            var thenByResult = studentList.OrderBy(s => s.StudentName).ThenBy(s => s.Age);
            foreach (var item in thenByResult)
            {
                Console.WriteLine(item.StudentID + " " + item.StudentName + " " + item.Age);
            }

            // group by

            // query syntax
            //var groupedResult = from s in studentList
            //                    group s by s.Age;

            // method syntax
            var groupedResult = studentList.GroupBy(x => x.Age);
;
            foreach (var ageGroup in groupedResult)
            {
                Console.WriteLine("Age Group: {0}", ageGroup.Key); //Each group has a key 

                foreach (Student s in ageGroup) // Each group has inner collection
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }
            Console.WriteLine();

            // ToLookup ... similar to group by
            var lookupResult = studentList.ToLookup(s => s.Age);

            foreach (var group in lookupResult)
            {
                Console.WriteLine("Age Group: {0}", group.Key);  //Each group has a key 

                foreach (Student s in group)  //Each group has a inner collection  
                    Console.WriteLine("Student Name: {0}", s.StudentName);
            }

            // join
            IList<string> strList1 = new List<string>() {
                "One",
                "Two",
                "Three",
                "Four"
            };

            IList<string> strList2 = new List<string>() {
                "One",
                "Two",
                "Five",
                "Six"
            };

            var joined1 = strList1.Join(strList2, k1 => k1, k2 => k2, (k1, k2) => k1); // selecting object from same collection
            var joined2 = strList1.Join(strList2, k1 => k1, k2 => k2, (k1, k2) => new { Data = "joined " + k1}); // making new object to select in linq

            foreach (var item in joined2)
            {
                Console.WriteLine(item.Data);
            }
            Console.WriteLine();

            //var onlyNames = studentList.Select(x => x.StudentName); // for 1 field only
            var onlyNames = studentList.Select(x => new { x.StudentName, x.Age}); // to select multiple fields

            foreach (var item in onlyNames)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine();

            // aggregate
            IList<String> strList = new List<String>() { "One", "Two", "Three", "Four", "Five" };

            var commaSeperatedString = strList.Aggregate((s1, s2) => s1 + ", " + s2);

            Console.WriteLine(commaSeperatedString);

            var ageSum = studentList.Aggregate(0, (sum, x) => sum += x.Age, sum => sum.ToString()); // 0 is the initial value called seed, sum is output , x is object while iterating, third argument is to edit result set
            Console.WriteLine("Age sum using Aggregate() is : " + ageSum);

            var ageSum2 = studentList.Sum(x => x.Age);
            Console.WriteLine("Age sum using Sum() is : " + ageSum2);

            Console.WriteLine();

            // element at
            IList<int> intList = new List<int>() { 10, 21, 30, 45, 50, 87 };
            IList<string> strList3 = new List<string>() { "One", "Two", null, "Four", "Five" };

            Console.WriteLine("1st Element in intList: {0}", intList.ElementAt(0));
            Console.WriteLine("1st Element in strList: {0}", strList3.ElementAt(0));

            Console.WriteLine("2nd Element in intList: {0}", intList.ElementAt(1));
            Console.WriteLine("2nd Element in strList: {0}", strList3.ElementAt(1));

            Console.WriteLine("3rd Element in intList: {0}", intList.ElementAtOrDefault(2));
            Console.WriteLine("3rd Element in strList: {0}", strList3.ElementAtOrDefault(2));

            Console.WriteLine("10th Element in intList: {0} - default int value",
                            intList.ElementAtOrDefault(9));
            //below will give error due to index
            //Console.WriteLine("10th Element in strList: {0} - default string value (null)",
            //                 strList3.ElementAt(9));
            Console.WriteLine();

            // SequenceEqual
            bool isEqual = strList.SequenceEqual(strList2); // returns false
            Console.WriteLine(isEqual);
            Console.WriteLine();

            // Concat
            IList<string> collection1 = new List<string>() { "One", "Two", "Three" };
            IList<string> collection2 = new List<string>() { "Five", "Six" };

            var collection3 = collection1.Concat(collection2);

            foreach (string str in collection3)
                Console.WriteLine(str);
            Console.WriteLine();

            // empty, repeat, range
            var intCollection = Enumerable.Repeat<int>(10, 10);
            foreach (var item in intCollection)
            {
                Console.WriteLine("Value : {0} ", item);
            }
            Console.WriteLine();
            intCollection = Enumerable.Range(12, 5);
            foreach (var item in intCollection)
            {
                Console.WriteLine("Value : {0} ", item);
            }
            Console.WriteLine();
            intCollection = Enumerable.Empty<int>();
            Console.WriteLine("Count: {0} ", intCollection.Count());
            Console.WriteLine("Type: {0} ", intCollection.GetType().Name);

            var intCollection2 = Enumerable.Repeat<string>("Hello", 5);
            foreach (var item in intCollection2)
            {
                Console.WriteLine("Value : {0} ", item);
            }
            Console.WriteLine();

            var distinctStudents = studentList.Distinct(new StudentComparer()); // need to add Comparer class for complex object collections
            foreach (Student std in distinctStudents)
                Console.WriteLine(std.StudentName);
            Console.WriteLine();

            var resultedCol = studentList.Except(studentList2, new StudentComparer());
            foreach (Student std in resultedCol)
                Console.WriteLine(std.StudentName);
            Console.WriteLine();

            var resultedCol2 = studentList.Intersect(studentList2, new StudentComparer());
            foreach (Student std in resultedCol2)
                Console.WriteLine(std.StudentName);
            Console.WriteLine();

            var resultedCol3 = studentList.Union(studentList2, new StudentComparer());
            foreach (Student std in resultedCol3)
                Console.WriteLine(std.StudentName);
            Console.WriteLine();

            var xx = studentList.TakeWhile(x => x.StudentID < 4);
            foreach (var item in xx)
            {
                Console.WriteLine(item.StudentName);
            }
            Console.WriteLine();

            ReportTypeProperties(studentList.Cast<Student>()); //casting to IEnumerable<T>
            Console.WriteLine();

            IDictionary<int, Student> studentDict =
                                studentList.ToDictionary<Student, int>(x => x.StudentID);

            foreach (var key in studentDict.Keys)
                Console.WriteLine("Key: {0}, Value: {1}",
                                            key, (studentDict[key] as Student).StudentName);

            Expression<Func<Student, bool>> isAdultExp = x => x.Age >= 18;

            // compiling expression to create delegate
            var isAdult = isAdultExp.Compile();

            // invoking delegate
            Console.WriteLine(isAdult(studentList[0]));
            Console.WriteLine();

            // manual expression tree
            ParameterExpression pe = Expression.Parameter(typeof(Student), "s");

            MemberExpression me = Expression.Property(pe, "Age");

            ConstantExpression constant = Expression.Constant(18, typeof(int));

            BinaryExpression body = Expression.GreaterThanOrEqual(me, constant);

            var isAdultExprTree = Expression.Lambda<Func<Student, bool>>(body, new[] { pe });

            Console.WriteLine("Expression Tree: {0}", isAdultExprTree);

            Console.WriteLine("Expression Tree Body: {0}", isAdultExprTree.Body);

            Console.WriteLine("Number of Parameters in Expression Tree: {0}", isAdultExprTree.Parameters.Count);

            Console.WriteLine("Parameters in Expression Tree: {0}", isAdultExprTree.Parameters[0]);
            Console.WriteLine();

            // let keyword

            var ex = from student in studentList
                     let studentAge = student.Age
                     where studentAge > 18
                     select new { studentAge, AfterFiveYears = studentAge + 5 };

            foreach (var item in ex)
            {
                Console.WriteLine($"Age {item.studentAge}, After 5 years {item.AfterFiveYears}");
            }
            Console.WriteLine();

            // into keyword
            var ex2 = from student in studentList
                     let studentAge = student.Age
                     where studentAge > 18
                     select new { studentAge, AfterFiveYears = studentAge + 5 }
                     into AgesData
                     where AgesData.AfterFiveYears > 25
                     select AgesData;

            foreach (var item in ex2)
            {
                Console.WriteLine($"Age {item.studentAge}, After 5 years {item.AfterFiveYears}");
            }
            Console.WriteLine();

            //differed execution
            var teenAgerStudents = from s in studentList.GetTeenAgerStudents()
                                   select s;

            // GetTeenAgerStudents() get called in loop
            foreach (Student teenStudent in teenAgerStudents)
                Console.WriteLine("Student Name: {0}", teenStudent.StudentName);
            Console.WriteLine();

            // immidiate execution
            // add break point and see value while debugging
            IList<Student> teenAgerStudents2 =
                studentList.Where(s => s.Age > 12 && s.Age < 25).ToList();
            Console.WriteLine();
        }
    }
}
