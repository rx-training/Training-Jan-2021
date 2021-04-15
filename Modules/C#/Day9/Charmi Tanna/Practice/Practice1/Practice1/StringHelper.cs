using System;
using System.Collections.Generic;
using System.Text;

namespace Practice1
{
    public static class StringHelper
    {
        public static string ChangeFirstLetterCase(this string input)
        {
            if(input.Length>0)
            {
                char[] array1 = input.ToCharArray();
                array1[0] = char.IsUpper(array1[0]) ? char.ToLower(array1[0]) : char.ToUpper(array1[0]);
                return new string(array1);
            }
            return input;
        }
    }
}
