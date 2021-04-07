using System;
using System.Collections.Generic;
using System.Text;

namespace Day4Assignment
{
    class NameException : ApplicationException
    {
        public NameException()
        {

        }

        public NameException(string message) : base(message)
        {

        }

        public void validateName(string name)
        {
            if (String.IsNullOrWhiteSpace(name))
            {
                throw new NameException("Name can not be an empty value");
            }
            else
            {
                for (int i=0; i<name.Length; i++)
                {
                    if(!char.IsLetter(name[i]) && !char.IsWhiteSpace(name[i]))
                    {
                        throw new NameException("Name can only contain alphabetic characters");
                    }
                }
            }
        }
    }
}
