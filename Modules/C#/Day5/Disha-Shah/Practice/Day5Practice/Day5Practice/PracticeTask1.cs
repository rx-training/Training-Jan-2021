using System;
using System.Collections.Generic;
using System.Text;

namespace Day5Practice
{
    class Student
    {
        public string Name { get; set; }

        public override string ToString()
        {
            return "Name:" + Name;
        }

    }

    class PracticeTask1
    {
        List<Student> studentInfo;

        public void AddStudent()
        {

            List<Student> students = new List<Student>();

            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Enter Student Name:");
                string name = Console.ReadLine();
                try
                {
                    validateName(name);
                    students.Add(new Student() { Name = name });
                }
                catch (FormatException e)
                {
                    Console.WriteLine(e.Message);
                }
            }

            studentInfo = new List<Student>(students);

        }

        public void DisplayStudent()
        {
            Console.WriteLine();
            foreach (Student aStudent in studentInfo)
            {
                Console.WriteLine(aStudent);
            }

        }

        public void SearchStudent()
        {
            Console.WriteLine();
            Console.WriteLine("Enter index number to search:");
            int index = Convert.ToInt32(Console.ReadLine());

            try
            {
                validateIndex(index);
            }
            catch(FormatException e)
            {
                Console.WriteLine(e.Message);
            }
            catch(ArgumentOutOfRangeException e)
            {
                Console.WriteLine(e.Message);
            }
            Console.WriteLine($"Student name searched for index {index} is : {studentInfo[index]}");
        }

        void validateName(string name)
        {
            if (String.IsNullOrWhiteSpace(name))
            {
                throw new FormatException("Name can not be an empty value");
            }
            else
            {
                for (int i = 0; i < name.Length; i++)
                {
                    if (!char.IsLetter(name[i]) && !char.IsWhiteSpace(name[i]))
                    {
                        throw new FormatException("Name can only contain alphabetic characters");
                    }
                }
            }
        }

        void validateIndex(int index)
        {
            if(index<0 || index>=studentInfo.Count)
            {
                throw new ArgumentOutOfRangeException("index", "Index is out of range");
            }
        }
    }
}
