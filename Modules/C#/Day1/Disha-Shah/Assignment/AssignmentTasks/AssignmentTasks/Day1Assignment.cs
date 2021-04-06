using System;

namespace AssignmentTasks
{
    public enum Weekday
    {
        Monday = 0,
        Tuesday = 1,
        Wednesday = 2,
        Thursday = 3,
        Friday = 4
    }
    class Day1Assignment
    {
        static void Main(string[] args)
        {
            // 1. Print sum of all the even numbers
            int n, sum=0;
            Console.WriteLine("Enter a number:");
            n = Convert.ToInt32(Console.ReadLine());
            for(int i=0 ; i<=n ; i++)
            {
                if(i%2 == 0)
                {
                    sum += i;
                }
            }
            Console.WriteLine($"Sum of all even numbers till {n} = {sum}");

            // 2.Store your name in one string and find out how many vowel characters are there in your name.
            string name = "Disha Shah";
            int vowels = 0;
            char letter;
            for(int i = 0; i<name.Length; i++)
            {
                letter = name[i];
                if(letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U' || letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
                {
                    vowels++;
                }
            }
            Console.WriteLine($"Total vowels in {name} are {vowels}");

            // 3.Create a weekday enum and accept week day number and display week day.
            int weekdayno;
            Console.WriteLine("Enter a weekday number between [0-4] to get weekday:");
            weekdayno = Convert.ToInt32(Console.ReadLine());
            switch(weekdayno)
            {
                case 0:
                    Console.WriteLine(Weekday.Monday);
                    break;
                case 1:
                    Console.WriteLine(Weekday.Tuesday);
                    break;
                case 2:
                    Console.WriteLine(Weekday.Wednesday);
                    break;
                case 3:
                    Console.WriteLine(Weekday.Thursday);
                    break;
                case 4:
                    Console.WriteLine(Weekday.Friday);
                    break;
                default:
                    Console.WriteLine("It's not a valid weekday");
                    break;
            }
            
            // 4. Accept 10 student Name,Address,Hindi,English,Maths Marks ,do the total and compute Grade. Note do it with Array
            // and display the result in grid format
            string[,] student = new string[2, 3];
            double[,] marks = new double[2, 4];
            double totalperc;

            for(int i=0; i<2;i++)
            {
                Console.WriteLine("Enter Student Name:");
                student[i, 0] = Console.ReadLine();

                Console.WriteLine("Enter Address:");
                student[i, 1] = Console.ReadLine();

                Console.WriteLine("Enter Hindi Marks(out of 100):");
                marks[i, 0] = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Enter English Marks(out of 100):");
                marks[i, 1] = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine("Enter Maths Marks(out of 100):");
                marks[i, 2] = Convert.ToDouble(Console.ReadLine());

                marks[i, 3] = marks[i, 0] + marks[i, 1] + marks[i, 2];

                totalperc = marks[i, 3] / 3;    

                if(totalperc>=90)
                {
                    student[i, 2] = "A";
                }
                else if(totalperc > 75)
                {
                    student[i, 2] = "B";
                }
                else if(totalperc > 60)
                {
                    student[i, 2] = "C";
                }

            }

            Console.WriteLine("Name\tAddress\tHindi\tEnglish\tMaths\tTotal\tGrade");

            for (int i = 0; i < 2; i++)
            {

                Console.Write($"{student[i, 0]}\t{student[i, 1]}\t{marks[i, 0]}\t{marks[i, 1]}\t{marks[i, 2]}\t{marks[i, 3]}\t{student[i, 2]}");
                
                Console.WriteLine();
            }

            // 5. Accept Age from user, if age is more than 18 eligible for vote otherwise it should be displayed as not
            // eligible. Do it with ternary operator
            int age;
            Console.WriteLine("Enter your age:");
            age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(age >= 18 ? "Eligible to vote" : "Not eligible to vote");

        }
    }
}
