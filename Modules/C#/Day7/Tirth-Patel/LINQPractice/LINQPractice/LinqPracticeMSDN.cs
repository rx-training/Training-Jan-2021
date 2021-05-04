using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
namespace LINQPractice
{
    class LinqPracticeMSDN
    {
        static void Main(string[] args)
        {
            Students[] studentArray = {
                    new Students() { StudentID = 1, StudentName = "John", age = 18 ,StandardId  = 1 } ,
                    new Students() { StudentID = 2, StudentName = "Steve",  age = 21 ,StandardId =1} ,
                    new Students() { StudentID = 3, StudentName = "Bill",  age = 25 ,StandardId =2} ,
                    new Students() { StudentID = 4, StudentName = "Ram" , age = 20 ,StandardId =2} ,
                    new Students() { StudentID = 5, StudentName = "Ron" , age = 31 } ,
                    new Students() { StudentID = 6, StudentName = "Chris",  age = 17 } ,
                    new Students() { StudentID = 7, StudentName = "Rob",age = 17,StandardId = 3 } ,
                };

            IList<Students> StudentList = new List<Students>();
            StudentList = studentArray.ToList();
            var qeuryFirstLetter = from Std in StudentList
                                   group Std by Std.StudentName[0];
            foreach (var studentGroup in qeuryFirstLetter)
            {
                Console.WriteLine($"Key: {studentGroup.Key}");
                // Nested foreach is required to access group items.
                foreach (var student in studentGroup)
                {
                    Console.WriteLine($"\t{student.StudentName}");
                }
            }
            var queryNestedGroups =
       from student in StudentList
       group student by student.StudentID into newGroup1
       from newGroup2 in
           (from student in newGroup1
            group student by student.age)
       group newGroup2 by newGroup1.Key;
            foreach (var outerGroup in queryNestedGroups)
            {
                Console.WriteLine($"DataClass.Students Level = {outerGroup.Key}");
                foreach (var innerGroup in outerGroup)
                {
                    Console.WriteLine($"\tStudent with Age: {innerGroup.Key}");
                    foreach (var innerGroupElement in innerGroup)
                    {
                        Console.WriteLine($"\t\t{innerGroupElement.StudentName}");
                    }
                }
            }

        }

    }
}
