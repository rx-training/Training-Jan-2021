using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class DateException : Exception
    {
        public DateException()
        {
        }

        public DateException(string message)
            : base(message)
        {
        }

        public DateException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
