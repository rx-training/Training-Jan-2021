using System;
//using class library
using StudentInfo;

namespace Practice1
{
    class Student
    {
        /*public int id;
        public string name;
        public string address;*/
        //Properties
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public string StudentAddress { get; set; }
        string name;
        public string DiplayName
        {
            get
            {
                return Display();
            }
        }

        public string Display()
        {
            name = StudentName;
            return name;
        }

        //Properties
        /*public int StudentID
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        }
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
        public string Address
        {
            get
            {
                return address;
            }
            set
            {
                address = value;
            }
        }*/
    }
    
    class Program
    {
        static void Main(string[] args)
        {
            Student s = new Student();
            s.StudentID = 1;
            s.StudentAddress = "xyz";
            s.StudentName = "abc";
            Console.WriteLine(s.DiplayName);
            Console.WriteLine(s.StudentName);
            calc c = new calc();
            var result = c.Add(1,2);
            Console.WriteLine(result);
            c.Sub(5,2);
            Student s1 = new Student();
            s1.StudentID = 2;
            s1.StudentName = "pqr";
            s1.StudentAddress = "xxx";
            Console.WriteLine(s1.DiplayName);
            //Property Initializers
            Student s2 = new Student() { StudentID =3,StudentAddress = "Efg"};
            Console.WriteLine("Please enter your name:");
            s2.StudentName = Console.ReadLine();
            Console.WriteLine(s2.DiplayName);
            //Consructors
            Products p3 = new StudentInfo.Products();
            p3.display();
            Products p = new StudentInfo.Products(1,"pen");
            p.display();
            Products p1 = new StudentInfo.Products(1, "pen","pen");
            p1.display();
            Products p2 = new StudentInfo.Products(1, "pen","pen",20);
            p2.display();
            //User define type array:
            Student[] students = new Student[10];
            for(int  i = 0;i< 2; i++)
            {
                Console.WriteLine("Enter ID,name,address");
                students[i] = new Student() { StudentID = Convert.ToInt32(Console.ReadLine()),StudentName = Console.ReadLine(),StudentAddress = Console.ReadLine()};
                for(i = 0;i <2;i++)
                {
                    Console.WriteLine(students[i].StudentID);
                }
            }
            Student[] stud = new Student[10];
            for(int i= 0; i<2;i++)
            {
                Console.WriteLine("Enter id:");
                stud[i] = new Student() { StudentID = Convert.ToInt32(Console.ReadLine()),StudentName = Console.ReadLine(),StudentAddress = Console.ReadLine() };
                //Console.WriteLine(stud[i].StudentID);
            }
            for(int i=0;i<2;i++)
            {
                Console.WriteLine($"Student ID is:{stud[i].StudentID},Name is: {stud[i].StudentName},Address is: {stud[i].StudentAddress}");
            }
        }
    }
}
