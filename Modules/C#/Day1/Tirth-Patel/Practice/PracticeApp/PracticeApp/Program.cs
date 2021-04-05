using System;
using System.Collections.Generic;

namespace PracticeApp
{
    enum color
    {
        Red , 
        green =10 ,
        Blue
    }
  
    class Program
    {
        static void Main(string[] args)
        {
            string friend1 = "appbot";
            string friend2 = "C-sharp";
            string greeting = "          text after space     ";
            Console.WriteLine("Hello" + " World!");
            Console.WriteLine($"Hello {friend2} FROM {friend1}");
            Console.WriteLine(friend2.Length);
            Console.WriteLine(greeting);
            string newgreeting = greeting.TrimStart();
            Console.WriteLine($"******{newgreeting}*******");
            string newgreetings = greeting.TrimEnd();
            Console.WriteLine($"******{newgreetings}*******");
            string NewGreeting = greeting.Trim();
            greeting = greeting.Replace("text", "String");
            Console.WriteLine(greeting.ToUpper());
            Console.WriteLine(greeting.ToLower());
            string song = "you say goodbye I say hello";
            Console.WriteLine(song.Contains("goodbye"));
            Console.WriteLine(song.Contains("no"));
            Console.WriteLine(song.StartsWith("you"));
            int a = 10;
            int b = 20;
            int c = 30;
            int d = a / b + c * a;
            Console.WriteLine(d);
            int max = int.MaxValue;
            int biggerint = max + 34;
            Console.WriteLine(max);
            Console.WriteLine(biggerint);
            double radius = 2.5;
            double area = Math.PI * radius * radius;
            Console.WriteLine($"Area of circle having radius {radius} is {area} ");
            int count = 0;
            while (count < 5) {
                Console.WriteLine($"its my {count+1} time executing in while loop");
                count++;
            }
            count = 5;
            do
            {
                Console.WriteLine($"its my {count + 1} time executing in do while loop");
                count++;
            } while (count < 5);
            for (int i = 1; i < 6; i++)

            {
                Console.WriteLine($"its my {i} time executing in for loop");
                
            }
            int sum = 0;
            for (int i = 1; i <=20; i++)
            {
                if (i % 3 == 0)
                {
                    sum = sum + i;
                }

            }
            Console.WriteLine(sum);
           var names = new List<string> {"<name>","Tirth","abcdef" };
            foreach(var name in names)
                {
                Console.WriteLine($"Hello {name}!");
            }
            int[] array1 = new int[] { 1, 2, 3, 4, 5 };
            foreach (var item in array1)
            {
                Console.WriteLine(item);
            }
            //condition? consequent : alternative\
            Console.WriteLine(stringfromcolor(color.Red));
            Console.WriteLine(stringfromcolor(color.green));
            Console.WriteLine(stringfromcolor(color.Blue));
            
        }
        static string stringfromcolor(color c)
        {
            switch (c)
            {
                case color.Red:
                    return string.Format("RED = {0}", (int)c); 
                    break;
                case color.green:
                    return String.Format("Green = {0}", (int)c);

                case color.Blue:
                    return String.Format("Blue = {0}", (int)c);

                default:
                    return "Invalid color";
            }
        }
    }
}
