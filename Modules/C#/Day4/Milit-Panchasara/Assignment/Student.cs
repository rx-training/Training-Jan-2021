using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Assignment
{
    class Student
    {
        private string name;
        private int age;

        public string Name { 
            get
            {
                return name;
            }
            set
            {
                if (!Regex.IsMatch(value, @"^[a-zA-Z]+$"))
                {
                    throw new NameException("Name should only contains alphabets.");
                }
                name = value;
            }
        }
        public int Age
        {
            get
            {
                return age;
            }
            set
            {
                if(value == 0)
                {
                    throw new AgeException("Age Cannot be 0.");
                }
                age = value;
            }
        }

        public Student(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }
    }
}
