using System;

namespace IntExtensionMethods
{
    public static class ExtMethods
    {
        public static bool IsGreaterThan(this int num1, int num2)
        {
            return num1 > num2;
        }
    }
}
