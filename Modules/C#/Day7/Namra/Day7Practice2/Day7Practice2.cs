using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Day7Practice2
{
    public class Student
    {

        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
        public int StandardID { get; set; }

    }
    public class Standard
    {
        public int StandardID { get; set; }
        public string StandardName { get; set; }
    }
    public static class EnumerableExtensionMethods
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
    class Day7Practice2
    {
        static void ReportTypeProperties<T>(T obj)
        {
            Console.WriteLine($"Compile Time type : {typeof(T).Name} \n Actual Type : {obj.GetType().Name}  ");
        }
        static void Main(string[] args)
        {
            //AsEnumerable : Returns the input sequence as IEnumerable<T>
            //AsQueryable : Converts IEnumerable to IQueryable, to simulate a remote query provider
            // Cast :Converts a non-generic collection to a generic collection(IEnumerable to IEnumerable<T>)
            // OfType : Filters a collection based on a specified type
            // ToArray : Converts a collection to an array
            // ToDictionary : Puts elements into a Dictionary based on key selector function
            // ToList : Converts collection to List
            // ToLookUp : Groups elements into an LookUp<TKey, TElement>

            Student[] studentArray = {
                    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                    new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
                    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                    new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 } ,
                };

            ReportTypeProperties(studentArray);
            ReportTypeProperties(studentArray.AsEnumerable());
            ReportTypeProperties(studentArray.AsQueryable());

            ReportTypeProperties(studentArray.Cast<Student>());

            IList<string> strList = new List<string>() {
                                            "One",
                                            "Two",
                                            "Three",
                                            "Four",
                                            "Three"
                                            };

            string[] strArray = strList.ToArray<string>();// converts List to Array

            IList<string> list = strArray.ToList<string>(); // converts array into list

            IDictionary<int, Student> studentDict =
                                studentArray.ToDictionary<Student, int>(s => s.StudentID);

            foreach (var key in studentDict.Keys)
                Console.WriteLine("Key: {0}, Value: {1}",
                                            key, (studentDict[key] as Student).StudentName);

            Expression<Func<Student, bool>> isTeenAgerExpr = s => s.Age > 12 && s.Age < 20;
            // Compile expression using compile method to invoke it as delegate
            Func<Student, bool> isTeenAger = isTeenAgerExpr.Compile();

            bool result = isTeenAger(new Student() { StudentID = 1, StudentName = "Namra", Age = 21 });
            Console.WriteLine(result);

            // Expression tree
            ParameterExpression pe = Expression.Parameter(typeof(Student), "s");

            MemberExpression me = Expression.Property(pe, "Age");

            ConstantExpression constant = Expression.Constant(18, typeof(int));

            BinaryExpression body = Expression.GreaterThanOrEqual(me, constant);

            var ExpressionTree = Expression.Lambda<Func<Student, bool>>(body, new[] { pe });


            //Console.WriteLine("Expression Tree: {0}", ExpressionTree);

            //Console.WriteLine("Expression Tree Body: {0}", ExpressionTree.Body);

            //Console.WriteLine("Number of Parameters in Expression Tree: {0}", ExpressionTree.Parameters.Count);

            //Console.WriteLine("Parameters in Expression Tree: {0}", ExpressionTree.Parameters[0]);

            //Deferred Execution

            var teenAgerStudent = from s in studentArray.GetTeenAgerStudents()
                                  select s;
            //foreach(Student t in teenAgerStudent)
            //{
            //    Console.WriteLine($"Student Name : {t.StudentName}");
            //}

            //Immediate execution
            IList<Student> teenAgerStudents =
                studentArray.Where(s => s.Age > 12 && s.Age < 20).ToList();

            Console.WriteLine("-----------------------------------------------------------------------------------------------------------");
            //Let keyword
            var lowercaseStudentNames = from s in studentArray
                                        let lowercaseStudentName = s.StudentName.ToLower()
                                        where lowercaseStudentName.StartsWith("r")
                                        select lowercaseStudentName;

            foreach (var name in lowercaseStudentNames)
                Console.WriteLine(name);

            Console.WriteLine("-----------------------------------------------------------------------------------------------------------");
            // into keyword
            var teenAgerStudentsInto = from s in studentArray
                                    where s.Age > 12 && s.Age < 20
                                    select s
                                    into teenStudents
                                        where teenStudents.StudentName.StartsWith("B")
                                        select teenStudents;
            Console.WriteLine("-----------------------------------------------------------------------------------------------------------");
            IList<Student> studentList = new List<Student>() {
                new Student() { StudentID = 1, StudentName = "John", Age = 18, StandardID = 1 } ,
                new Student() { StudentID = 2, StudentName = "Steve",  Age = 21, StandardID = 1 } ,
                new Student() { StudentID = 3, StudentName = "Bill",  Age = 18, StandardID = 2 } ,
                new Student() { StudentID = 4, StudentName = "Ram" , Age = 20, StandardID = 2 } ,
                new Student() { StudentID = 5, StudentName = "Ron" , Age = 21 }
            };

            IList<Standard> standardList = new List<Standard>() {
                new Standard(){ StandardID = 1, StandardName="Standard 1"},
                new Standard(){ StandardID = 2, StandardName="Standard 2"},
                new Standard(){ StandardID = 3, StandardName="Standard 3"}
            };
            // Multiple select and where operator
            var studentNames = studentList.Where(s => s.Age > 18)
                              .Select(s => s)
                              .Where(st => st.StandardID > 2)
                              .Select(s => s.StudentName);
            //foreach (var item in studentNames)
            //{
            //    Console.WriteLine(item);
            //}

            // anonymous object
            var teenStudentsName = from s in studentList
                                   where s.Age > 12 && s.Age < 20
                                   select new { StudentName = s.StudentName };

            //teenStudentsName.ToList().ForEach(s => Console.WriteLine(s.StudentName));

            //Group by
            var studentsGroupByStandard = from s in studentList
                                          group s by s.StandardID into sg
                                          orderby sg.Key
                                          select new { sg.Key, sg };


            //foreach (var group in studentsGroupByStandard)
            //{
            //    Console.WriteLine($"StandardID : {group.Key}");

            //    group.sg.ToList().ForEach(st => Console.WriteLine(st.StudentName)); // conversion tolist()
            //}

            // Left outer join
            var studentsGroup = from stad in standardList
                                join s in studentList
                                on stad.StandardID equals s.StandardID
                                    into sg
                                select new
                                {
                                    StandardName = stad.StandardName,
                                    Students = sg
                                };

            //foreach (var group in studentsGroup)
            //{
            //    Console.WriteLine(group.StandardName);

            //    group.Students.ToList().ForEach(st => Console.WriteLine(st.StudentName));
            //}

            var studentWithStandard = from stad in standardList
                                      join s in studentList
                                      on stad.StandardID equals s.StandardID
                                      into sg
                                      from std_grp in sg
                                      orderby stad.StandardName, std_grp.StudentName
                                      select new {
                                          studentName = std_grp.StudentName,
                                          StandardName = stad.StandardName  
                                      };
            //foreach (var item in studentWithStandard)
            //{
            //    Console.WriteLine($"{item.StandardName} in {item.StandardName}");
            //}

            var nestedQuery = from s in studentList
                              where s.Age > 18 && s.StandardID ==
                                (from std in standardList
                                 where std.StandardName == "Standard 1"
                                 select std.StandardID).FirstOrDefault()
                              select s;

            nestedQuery.ToList().ForEach(s => Console.WriteLine(s.StudentName));

        }

    }
}
