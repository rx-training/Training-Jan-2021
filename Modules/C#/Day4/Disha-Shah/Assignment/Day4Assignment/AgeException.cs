using System;
using System.Collections.Generic;
using System.Text;

namespace Day4Assignment
{
    class AgeException : Exception
    {
        public AgeException()
        {

        }

        public AgeException(string message) : base(message)
        {

        }

        public void validateAge(int age)
        {
            if(age<=0)
            {
                throw new AgeException("Age should be greater than 0");
            }
        }
    }
}
