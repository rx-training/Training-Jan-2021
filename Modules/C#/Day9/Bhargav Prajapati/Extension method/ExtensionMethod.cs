using System;

namespace Extension_method
{
    public static class  ExtensionMethod
    {
        public static int worldCount(this String str)
        {
            return str.Split(new char[] { ' ', ',', '.', '?' }, StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }
}
