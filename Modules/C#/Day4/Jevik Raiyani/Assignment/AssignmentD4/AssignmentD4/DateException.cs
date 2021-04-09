using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentD4
{
    class DateException : Exception
    {
        public DateException(string message) :
            base(message)
        {
        }
    }
    public class Student3
    {
        public string ValidDate(DateTime yourDate)
        {
            {
                if (yourDate.Date < DateTime.Now.Date)
                    throw new NameException("Date Must be Today or Future date");

                return "Date " + yourDate + " is Valid";
            }
        }
    }
}
