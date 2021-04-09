using System;

namespace firstconsoleapp
{
    class Program
    {
        static void Main(string[] args)
        { 
           Console.BackgroundColor = ConsoleColor.Green;
            Console.WriteLine("hello world");
            int num1 = 42;
            int num2 = 119;
            int c = num1 + num2;
            Console.WriteLine("Get value of first number {0} and second number {1} so total sum of both {2}",num1,num2,c);
            char[] letters = { 'f', 'r', 'e', 'd', ' ', 's', 'm', 'i', 't', 'h' };
            string name = "";
            int[] a = new int[10];
            Console.WriteLine(c);
            Console.ReadKey();
            for (int i = 0; i < letters.Length; i++)
            {
                name += letters[i];
                a[i] = i + 1;
                SendMessage(name, a[i]);
                Console.WriteLine(name);
            }
            Console.ReadKey();
            int n1, n2;
            Console.WriteLine("enter first no:");
            n1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("enter sec no:");
            n2 = Convert.ToInt32(Console.Read());
            int n3 = n1 * n2;
            Console.WriteLine("Get value of first number {0} and second number {1} so multiple of both {2}", n1, n2, n3);
        }
        static void SendMessage(string name, int msg)
        {
            Console.WriteLine("Hello, " + name + "! Count to " + msg);
        }
    }
}
