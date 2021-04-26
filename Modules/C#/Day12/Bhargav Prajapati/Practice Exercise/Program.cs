using Microsoft.EntityFrameworkCore;
using Practice_Exercise.Modals;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Practice_Exercise
{
    class CrudOperation
    {
        public void InsertingDataStudent()
        {
            
            Console.WriteLine("Enter First Name:-");
             string firstname = Console.ReadLine();

            Console.WriteLine("Enter Last Name:-");
             string lastname = Console.ReadLine();

            Console.WriteLine("Enter Height :-");
           float  height = float.Parse(Console.ReadLine());

            Console.WriteLine("Enter Wieght :-");
            float weidth = float.Parse(Console.ReadLine());

            Console.WriteLine("Enter The GradeId :-");
             int gradeid = Convert.ToInt32(Console.ReadLine());

            SchoolContext data = new SchoolContext();
            List<Student> s1 = new List<Student>() { new Student() {FirstName=firstname,LastName=lastname,Height=height,Weight=weidth,Gradeofid=gradeid } };
            foreach (var item in s1)
            {
                data.Students.Add(item);
                data.SaveChanges();
            }
            

            Console.WriteLine("Success Fully Inseted Data Into the Student");
        
            }

        public void UpdateStudentData()
        {
            Console.WriteLine("Enter Id You Want To  Update ");
            int id = Convert.ToInt32(Console.ReadLine());
            SchoolContext data = new SchoolContext();


            var updatedrecored = data.Students.Single(p => p.StudentId == id);
            Console.WriteLine("Enter New First  Name :-");
            updatedrecored.FirstName = Console.ReadLine();
            Console.WriteLine("Enter New Last Name:-");
            updatedrecored.LastName = Console.ReadLine();

            Console.WriteLine("Enter New Height :-");
            updatedrecored.Height = float.Parse(Console.ReadLine());

            Console.WriteLine("Enter New weight :-");
            updatedrecored.Weight = float.Parse(Console.ReadLine());

            Console.WriteLine("Enter New The GradeId :-");
            updatedrecored.Gradeofid = Convert.ToInt32(Console.ReadLine());

            data.SaveChanges();
            Console.WriteLine("SuccessFully Updeted Data");

        }
        public void deletestudentData()
        {
            Console.WriteLine("Enter Student Id You Want To Remove");
            int id = Convert.ToInt32(Console.ReadLine());
            SchoolContext data = new SchoolContext();
            var removedata = data.Students.Single(p => p.StudentId == id);
            data.Remove(removedata);
            data.SaveChanges();
            Console.WriteLine("Success Fully Deleted Data");
        }

        public void StdDetails()
        {
            SchoolContext data = new SchoolContext();
            Console.WriteLine("Enter FistName You Want To Print Details");
            string stdid = Console.ReadLine();
            var stddetails = data.Students.Include(p => p.Grade).Single(p=>p.FirstName==stdid);

            
                
                Console.WriteLine($"Student Id :- {stddetails.StudentId}");
                Console.WriteLine($"FirstName :- {stddetails.FirstName}");
                Console.WriteLine($"LastName :- {stddetails.LastName}");
                Console.WriteLine($"Height :- {stddetails.Height}");
                Console.WriteLine($"Width :- {stddetails.Weight}");
                Console.WriteLine($"Grade :- {stddetails.Grade.GradeName}");
                
            




        }

        public void InsertingDataGrade()
        {
            Console.WriteLine("Enter Grade Name :-");
            string Gradename = Console.ReadLine();
            SchoolContext data = new SchoolContext();
            Grade g1 = new Grade() { GradeName = Gradename };
            data.Grades.Add(g1);
            data.SaveChanges();
            Console.WriteLine("Success Fully Inseted Data Into the Student");

        }
        public void UpdateGrade()
        {
            Console.WriteLine("Enter Id You Want To  Update ");
            int id = Convert.ToInt32(Console.ReadLine());
            SchoolContext data = new SchoolContext();
            var updatedata = data.Grades.Single(p=>p.GradeId==id);
            Console.WriteLine("Enter New Grade");
            updatedata.GradeName = Console.ReadLine();
            data.SaveChanges();


        }
        public void DeleteGrade()
        {
            Console.WriteLine("Enter Id You Want To  Delete ");
            int id = Convert.ToInt32(Console.ReadLine());
            SchoolContext data = new SchoolContext();
            var deletedata = data.Grades.Single(p => p.GradeId == id);
            data.Grades.Remove(deletedata);
            data.SaveChanges();
            


        }

        public void wholedataofstudent()
        {
            SchoolContext data = new SchoolContext();

            var dataofstudents = data.Students.Include(p=>p.Grade);

            foreach (var item in dataofstudents)
            {
                Console.WriteLine("================ Student Details ===============");
                Console.WriteLine($"Studet Id :- {item.StudentId}");
                Console.WriteLine($"First Name :- {item.FirstName}");
                Console.WriteLine($"Last Name :- {item.LastName}");
                Console.WriteLine($"Height :- {item.Height}");
                Console.WriteLine($"Width :- {item.Weight}");
                Console.WriteLine($"Grade :- {item.Grade.GradeName}");
                Console.WriteLine();
                Console.WriteLine();
            }
        }

        public void storeprocedure()
        {
            Console.WriteLine("Enter First Name :-");
            string Name = Console.ReadLine();
            SchoolContext data = new SchoolContext();
            var students = data.Students.FromSqlRaw($"getStudent {Name}").ToList();
            foreach (var item in students)
            {
                Console.WriteLine(item.FirstName);
                Console.WriteLine(item.LastName);
                Console.WriteLine(item.Height);
                Console.WriteLine(item.Weight);
               // Console.WriteLine(item.Grade.GradeName);
            }
            
        }
    }

        class Program
    {
        
        static void Main(string[] args)
        {
            
            CrudOperation c1 = new CrudOperation();

            int i = 6;
            while(i==6)
            { 
            Console.WriteLine("Press 1 Select Student Table");
            Console.WriteLine("Press 2 Select Grade Table");
            Console.WriteLine("Press 3 All Student Details With Grade");
                Console.WriteLine("Press 4 Execute Store Porcedure");
            int ch = Convert.ToInt32(Console.ReadLine());
            switch(ch)
            {
                case 1:
                    Console.WriteLine("Press 1 Insert The Data in student Table");
                    Console.WriteLine("Press 2 Update the student Table Data ");
                    Console.WriteLine("Press 3 Delete the student Data");
                    Console.WriteLine("Press 4 Details Of Specific Student");
                    int a = Convert.ToInt32(Console.ReadLine());
                    switch (a)
                    {
                        case 1:
                            c1.InsertingDataStudent();
                            break;
                        case 2:
                            c1.UpdateStudentData();
                            break;
                        case 3:
                            c1.deletestudentData();
                            break;
                        case 4:
                            c1.StdDetails();
                            break;
                        default:
                            Console.WriteLine("Enter Valid Choise");
                            break;

                    }
                    break;
                
                case 2:
                    Console.WriteLine("Press 1 Insert The Data in Grade Table");
                    Console.WriteLine("Press 2 Update the Grade Table ");
                    Console.WriteLine("Press 3 Delete the Grade Table");
                    int b = Convert.ToInt32(Console.ReadLine());
                    switch (b)
                    {
                        case 1:
                            c1.InsertingDataGrade();
                            break;
                        case 2:
                            c1.UpdateGrade();
                            break;
                        case 3:
                            c1.DeleteGrade();
                            break;
                        default:
                            Console.WriteLine("Enter Valid Choise");
                            break;

                    }

                    break;

                case 3:
                    c1.wholedataofstudent();
                    break;
                    case 4:
                        c1.storeprocedure();
                        break;
                default:
                    Console.WriteLine("Invalide Choise");
                    break;

                }

                Console.WriteLine("Press 6 Continue Operation");
                i = Convert.ToInt32(Console.ReadLine());
            
          
            }
        }
    }
}
