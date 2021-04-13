using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class AgeException : Exception
    {
        public AgeException()
        {
        }

        public AgeException(string message)
            : base(message)
        {
        }

        public AgeException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
