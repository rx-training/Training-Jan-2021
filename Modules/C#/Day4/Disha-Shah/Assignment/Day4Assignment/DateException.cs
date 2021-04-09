using System;
using System.Collections.Generic;
using System.Text;

namespace Day4Assignment
{
    class DateException : ApplicationException
    {
        public DateException()
        {

        }

        public DateException(string message) : base(message)
        {

        }

        public void validateDate(DateTime date)
        {
            if (DateTime.Compare(date, DateTime.Today) == -1)
            {
                throw new DateException("Date should not be earlier than today");
            }
        }
    }
}
