using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Assignment
{
    class CustomException :Exception 
    {
        

        public CustomException(string message) : base(message)
        {

        }
    }
}
