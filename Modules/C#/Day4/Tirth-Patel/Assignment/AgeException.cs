using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment
{
    public class AgeException :Exception
    {
        public AgeException(string message) : base(message)
        {

        }
    }
}
