using System;

namespace Assignment2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter your name : ");
            string name = Console.ReadLine();
            Console.WriteLine(name);

            int volvel = 0;

            for (int i = 0; i < name.Length; i++)
            {
                if (name[i] == 'a' ||
                    name[i] == 'e' ||
                    name[i] == 'i' ||
                    name[i] == 'o' ||
                    name[i] == 'u' ||
                    name[i] == 'A' ||
                    name[i] == 'E' ||
                    name[i] == 'I' ||
                    name[i] == 'O' ||
                    name[i] == 'U')
                {
                    volvel++; 
                }
            }
            Console.WriteLine("vowel in your name is : " + volvel);
        }
    }
}
