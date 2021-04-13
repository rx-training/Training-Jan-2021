using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class NameException : Exception
    {
        public NameException()
        {
        }

        public NameException(string message)
            : base(message)
        {
        }

        public NameException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
