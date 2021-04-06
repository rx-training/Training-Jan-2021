using System;

namespace Assignment2
{
    class Program
    {
        static void Main(string[] args)
        {
            int Count = 0;
            string name = "Charmi";
            for(int i = 0;i<name.Length;i++)
            {
                if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u')
                {
                    Count = Count + 1;
                }
            }
            Console.WriteLine(Count);
        }
    }
}
