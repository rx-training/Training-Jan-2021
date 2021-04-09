using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    class NameException : ApplicationException
    {


        string[] invalidChar = new string[] { "!","~","@","#","$","%","^","&","*","(",")","_","+","`","1","2","3","4","5","6","7","8","9","0","-","=","{","}","[","]",":",";","'","<",">","?",",",".","/","|","\\","\""};

        public NameException()
        {

        }
        public NameException(string message) : base(message)
        {

        }

        public void check(string name)
        {
            foreach(var s in invalidChar)
            {
                if (name.Contains(s))
                {
                    throw new NameException("Name doesn't contain any special character or Numeric value");
                }
            }
        }
    }
}
