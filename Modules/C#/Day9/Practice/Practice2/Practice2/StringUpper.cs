using System;
using System.Collections.Generic;
using System.Text;

namespace Practice2
{
    public static class StringUpper
    {
        public static string ChangeStringUpper(this string str)
        {
            if(str!=null)
            {
                str = str.ToUpper();     
            }
            return str;
        }
    }
}
