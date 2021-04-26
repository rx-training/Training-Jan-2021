using System;
using System.Linq;

namespace ConsoleApp1
{
    class Program
    {
        //enum color
        //{
        //    red,
        //    green,
        //    blue
        //}
        static void Main(string[] args)
        {
            int num1 = 0; int num2 = 0;
            Console.WriteLine("Console Calculator in C#\r");
            Console.WriteLine("------------------------\n");

            Console.WriteLine("Type a number, and then press Enter");
            num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Type another number, and then press Enter");
            num2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Choose an option from the following list:");
            Console.WriteLine("\ta - Add");
            Console.WriteLine("\ts - Subtract");
            Console.WriteLine("\tm - Multiply");
            Console.WriteLine("\td - Divide");
            Console.WriteLine("\tg - Modulo");
            Console.Write("Your option? ");

            switch (Console.ReadLine())
            {
                case "a":
                    Console.WriteLine($"Your result: {num1} + {num2} = " + (num1 + num2));
                    break;
                case "s":
                    Console.WriteLine($"Your result: {num1} - {num2} = " + (num1 - num2));
                    break;
                case "m":
                    Console.WriteLine($"Your result: {num1} * {num2} = " + (num1 * num2));
                    break;
                case "d":
                    while (num2 == 0)
                    {
                        Console.WriteLine("Enter a non-zero divisor: ");
                        num2 = Convert.ToInt32(Console.ReadLine());
                    }
                    Console.WriteLine($"Your result: {num1} / {num2} = " + (num1 / num2));
                    break;
                    Console.WriteLine($"Your result: {num1} / {num2} = " + (num1 / num2));
                    break;
                case "g":
                    Console.WriteLine($"Your result: {num1} % {num2} = " + (num1 % num2));
                    break;
            }
            Console.Write("Press any key to close the Calculator console app...");
            Console.ReadKey();



            //string[] cars = { "vovo", "ford", "BMW", "Mazda" };
            //cars[0] = "new";
            //Console.WriteLine(cars[0]);
            //Console.WriteLine(cars.Length);

            //int[] myNum = { 10, 50, 30, 40 };
            //Console.WriteLine(myNum[3]);

            //for (int i = 0; i < cars.Length; i++)
            //{
            //    Console.WriteLine(cars[i]);
            //}

            //foreach (string i in cars)
            //{
            //    Console.WriteLine(i);
            //}

            //foreach (int i in myNum)
            //{
            //    Console.WriteLine(i);
            //}
            //Array.Sort(cars);
            //Array.Sort(myNum);
            //foreach (string i in cars)
            //{
            //    Console.WriteLine(i);
            //}
            //foreach (int i in myNum)
            //{
            //    Console.WriteLine(i);
            //}
            //Console.WriteLine("min : {0} max : {1} sum : {2}",myNum.Max(),myNum.Min(),myNum.Sum());

            //string[] cars1 = new string[4];

            //string[] cars2 = new string[4] { "volvo","bmb","a","b" };

            //string[] car3 = new string[] { "volov", "bmw" };

            //string[] cars4;
            //cars4 = new string[]    { "volov", "bmw" };

            //Console.WriteLine("hello World!");
            //var myString = "Hello!!!!!!";
            //Console.WriteLine(myString);
            //double myFirstValue = 23.45;
            //int mySecondValue = 45;
            //double sum = myFirstValue + mySecondValue;
            //Console.WriteLine(sum.ToString());

            //bool myFirestBoolean = 3 + 2 == 5;
            //Console.WriteLine(myFirestBoolean.ToString());
            //bool mySecondBoolean = 3 + 2 > 5;
            //Console.WriteLine(mySecondBoolean.ToString());
            //bool bothAreTrue = myFirestBoolean && mySecondBoolean;
            //Console.WriteLine("bothAreTrure evaluates --> " + bothAreTrue);
            //bool oneIsTrue = myFirestBoolean || mySecondBoolean;
            //Console.WriteLine("oneIsTrue is evaluates {0} because one expression is true", oneIsTrue);
            //Console.WriteLine("oneIsTrue is evaluates " + oneIsTrue + " because one expression is true");
            //bool reverseMyFirestBoolean = !myFirestBoolean;
            //Console.WriteLine("myFirstBoolean is {0} but  reverseMyFirstBoolean is {1}",
            //    myFirestBoolean, reverseMyFirestBoolean);



            //color favourite = color.blue;

            //switch(favourite)
            //{
            //    case color.red:
            //        Console.WriteLine("you chose red");
            //        break;
            //    case color.green:
            //        Console.WriteLine("you chose green");
            //        break;
            //    case color.blue:
            //        Console.WriteLine("you chose blue");
            //        break;
            //    default:
            //        Console.WriteLine("not chose color");
            //        break;
            //}

            //Console.WriteLine("Hello World!");
            //Console.Write("What is your age? ");
            //string ageAsString = Console.ReadLine();
            //int age = int.Parse(ageAsString);
            //if (age > 65)
            //{
            //    Console.WriteLine("You are a senior Citizen");
            //}
            //else if (age >= 21)
            //{
            //    Console.WriteLine("You are an Adult");
            //}
            //else
            //{
            //    Console.WriteLine("You are not yet a legal Adult");
            //}

            //Console.Write("How old are you?");
            //int age1 = int.Parse(Console.ReadLine());

            //while (age1 > 0)
            //{
            //    Console.Write("Happy Birthday ");
            //    age1--;
            //}
            //Console.WriteLine("\nJevik");
            //Console.WriteLine("How old are you?");
            //int age2 = int.Parse(Console.ReadLine());

            //do
            //{
            //    Console.Write("Happy Birthday ");
            //    age2--;
            //}
            //while (age2 > 0);
            //for (int age = 5; age > 0 ; age--)
            //{
            //    Console.Write("Happy Birthday!");
            //}
            //for (int i = 0; i < 10; i++)
            //{
            //    Console.Write(i);
            //}

            //int age = 35;
            //int newAge = ++age;
            //Console.WriteLine("age {0}, newAge {1}", age, newAge);

            //newAge = age++;
            //Console.WriteLine("age {0} , newAge {1} ", age, newAge);

            //int i = 0;
            //for (;;)
            //{
            //    Console.WriteLine("hello ");
            //    i++;
            //    if(i>10)
            //    {
            //        break;
            //    }
            //}

            //int i = 0;
            //for (; ; )
            //{
            //    ++i;
            //    if (i == 5)
            //    {
            //        continue;
            //    }
            //    Console.WriteLine("hello {0}",i);

            //    if (i > 10)
            //    {
            //        break;
            //    }
            //}

            //for (int i = 0; i < 2000; i++)
            //{
            //    if(i % 100 == 0)
            //    {
            //        Console.WriteLine("Hello {0}", i);
            //    }
            //}

            //Console.Write("Pick a number between 1 and 6: ");
            //int choice = int.Parse(Console.ReadLine());

            //switch(choice)
            //{
            //    case 6:
            //    case 5:
            //        Console.WriteLine("you picked the biggest values");
            //        break;
            //    case 4:
            //        Console.WriteLine("your choice is 4");
            //        break;
            //    case 3:
            //        Console.WriteLine("your choice 3");
            //        break;
            //    case 2:
            //        Console.WriteLine("your choice 2");
            //        break;
            //    case 1:
            //        Console.WriteLine("your choice 1");
            //        break;
            //    default:
            //        Console.WriteLine("pls select valid entry");
            //        break;




        }
    }
}
