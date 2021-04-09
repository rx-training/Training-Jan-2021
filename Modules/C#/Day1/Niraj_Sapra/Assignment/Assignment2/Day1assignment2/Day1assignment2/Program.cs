

using System;

namespace Day1assignment2
{
    class Program
    {
        static void Main(string[] args)
        {
            String name= Console.ReadLine();
             
            int toatalnumber = 0;
            for (int i = 0; i < name.Length; i++)
            {
                if (name[i] == 'a'|| name[i] == 'e'|| name[i] == 'i' || name[i] == 'o' || name[i] == 'u')
                {
                    toatalnumber = toatalnumber + 1;
                }
            }
            Console.WriteLine("enter name in vovels is "+ toatalnumber);
          }
    }
}
