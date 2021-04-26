using System;
using System.Collections.Generic;
using System.Text;

namespace AssignmentD4
{
    class NameException : Exception
    {
        public NameException(string message) :
            base(message)
        {

        }
    }
    public class Student2
    {
        public string ValidName(string Name)
        {

            int w = 1;
            foreach (var ch in Name)
            {   
                if (!Char.IsLetter(ch))
                {
                    if (Char.IsWhiteSpace(ch) && w > 0)
                        w--;
                    else
                    throw new NameException("Name contain only characters And one White space");
                    
                }
            }
            
            return "Name is: " + Name;
        }
    }
}
