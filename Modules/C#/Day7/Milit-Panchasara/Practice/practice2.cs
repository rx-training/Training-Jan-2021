using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;


namespace Practice
{
    public class Student1
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int StandardID { get; set; }
    }

    public class Standard
    {
        public int StandardID { get; set; }
        public string StandardName { get; set; }
    }
    class practice2
    {
        public void p2()
        {
            IList<Student1> studentList = new List<Student1>() {
                new Student1() { StudentID = 1, StudentName = "John", StandardID =1 },
                new Student1() { StudentID = 2, StudentName = "Moin", StandardID =1 },
                new Student1() { StudentID = 3, StudentName = "Bill", StandardID =2 },
                new Student1() { StudentID = 4, StudentName = "Ram",  StandardID =2 },
                new Student1() { StudentID = 5, StudentName = "Ron" }
            };

            IList<Standard> standardList = new List<Standard>() {
                new Standard(){ StandardID = 1, StandardName="Standard 1"},
                new Standard(){ StandardID = 2, StandardName="Standard 2"},
                new Standard(){ StandardID = 3, StandardName="Standard 3"}
            };

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
        }
    }
}
