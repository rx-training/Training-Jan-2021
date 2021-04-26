using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentD4
{
    public class AgeException : Exception
    {
        public AgeException(string  message) :
            base(message)
        {
        }
    }
    public class Student
    {
        public string ValidAge(int Age)
        {
            if (Age <= 0)
                throw new AgeException("Age must be positive");

            return "age is: "+ Age;
        }        
    }
       
}
