using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class AgeException : ApplicationException
    {
        public AgeException()
        {
              
        }
        public AgeException(string message) : base(message)
        {

        }

        public void check(int age)
        {
            if (age < 0)
            {
                throw new AgeException("Age should be greater than 0");
            }
        }
    }
}
