using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class DateException : ApplicationException
    {
        public DateException()
        {

        }
        public DateException(string Message):base(Message)
        {

        }

        public void check (DateTime date)
        {
            if(date < DateTime.Today)
            {
                throw new DateException("Date should not be past to taoday's date. You cannot enter past date");
            }
        }
    }
}
