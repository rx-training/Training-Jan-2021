using System;
using System.Collections.Generic;
using System.Text;

namespace Extensionmethod
{
    public static class Extension
    {
        public static bool IsGreaterThan(this int i, int value)
        {
            return i > value;
        }
         
        
    }
}
