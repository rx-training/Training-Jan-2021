using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    public class NameException :Exception
    {
        public NameException(string message) : base(message)
        {

        }
    }
}
