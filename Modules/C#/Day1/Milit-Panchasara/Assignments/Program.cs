using System;
using System.Linq;

namespace Assignments
{
    class Assignment1
    {
        public static void Exercise(int number)
        {
            Int64 sum = 0;
            Console.Write($"Sum of");
            for (int i = 2; i <= number; i+=2)
            {
                Console.Write($" {i}");
                sum += i;
            }
            Console.WriteLine(" is");
            Console.WriteLine(sum);
            return;
        }
    }

    class Assignment2
    {
        public static void Exercise(string name)
        {
            char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
            int count = 0;
            for (int i = 0; i < name.Length; i++)
            {
                if(name[i] == 'e' || name[i] == 'u' || name[i] == 'a' || name[i] == 'i' || name[i] == 'o')
                {
                    count++;
                }

                // Easy way using Linq

                //if(vowels.Contains(name[i]))
                //{
                //    count++;
                //}
            }
            Console.WriteLine($"There's {count} vowels in the name.");
        }
    }

    enum WeekDays
    { 
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Sunday = 7
    }

    class Assignment3
    {
        public static void Exercise(int dayNum)
        {
            if(dayNum < 1 || dayNum > 7)
            {
                Console.WriteLine("INVALID DAY NUMBER");
                return;
            }
            Console.WriteLine((WeekDays)dayNum);
        }
    }

    class Assignment5
    {
        public static void Exercise(int age)
        {
            string result = age > 18 ? "ELIGIBLE" : "NOT ELIGIBLE";
            Console.WriteLine(result);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            //Assignment 1
            #region Assignment 1
            Console.WriteLine("Assignment 1\n-----------------");
            Console.WriteLine("Enter a number to calulate sum of even numbers till the given number: ");
            var number = Console.ReadLine();
            int verifiedNumber = 0;
            while(!int.TryParse(number, out verifiedNumber))
            {
                Console.WriteLine("Enter valid Number: ");
                number = Console.ReadLine();
            }
            Assignment1.Exercise(verifiedNumber);
            Console.WriteLine("------------------------------");
            #endregion

            //Assignment 2
            #region Assignment 2
            Console.WriteLine("Assignment 2\n-----------------");
            Console.WriteLine("Enter your name: ");
            var name = Console.ReadLine();
            Assignment2.Exercise(name);
            Console.WriteLine("------------------------------");
            #endregion

            //Assignment 3
            #region Assignment 3
            Console.WriteLine("Assignment 3\n-----------------");
            Console.WriteLine("Enter a Day number: ");
            var dayNum = Console.ReadLine();
            int verifiedDayNum = 0;
            while (!int.TryParse(dayNum, out verifiedDayNum))
            {
                Console.WriteLine("Enter valid Day number: ");
                dayNum = Console.ReadLine();
            }
            Assignment3.Exercise(verifiedDayNum);
            Console.WriteLine("------------------------------");
            #endregion

            //Assignment 4
            #region Assignment 4
            Console.WriteLine("Assignment 4\n-----------------");
            Console.WriteLine("Enter a number of students to enter details: ");
            var studentsNum = Console.ReadLine();
            int verifiedStudentsNum = 0;
            while (!int.TryParse(studentsNum, out verifiedStudentsNum))
            {
                Console.WriteLine("Enter valid student numbers: ");
                studentsNum = Console.ReadLine();
            }
            string[,] studentsData = new string[verifiedStudentsNum, 5];
            Console.WriteLine(verifiedStudentsNum);
            for(int i = 0; i < verifiedStudentsNum; i++)
            {
                Console.WriteLine($"Details for Student {i + 1}");
                Console.WriteLine("Enter Name: ");
                studentsData[i, 0] = Console.ReadLine();
                Console.WriteLine("Enter Address: ");
                studentsData[i, 1] = Console.ReadLine();
                Console.WriteLine("Enter Hindi Marks: ");
                studentsData[i, 2] = ValidateMarks();
                Console.WriteLine("Enter English Marks: ");
                studentsData[i, 3] = ValidateMarks();
                Console.WriteLine("Enter Maths Marks: ");
                studentsData[i, 4] = ValidateMarks();
            }
            Console.WriteLine();
            Console.WriteLine("-----------------------------------------------------------------------------------------");
            Console.WriteLine("| Name                 | Address              | Hindi | English | Maths | Total | Grade |");
            Console.WriteLine("-----------------------------------------------------------------------------------------");
            for (int i = 0; i < verifiedStudentsNum; i++)
            {
                var total = 0;
                Console.Write("|");
                for (int j = 0; j < 5; j++)
                {
                    Console.Write($" {studentsData[i, j]}");
                    if (j == 0 || j == 1)
                    {
                        var len = 20 - studentsData[i, j].Length;
                        while (len-- >= 0)
                        {
                            Console.Write(" ");
                        }
                    }
                    else
                    {
                        total += Convert.ToInt32(studentsData[i, j]);
                        var len = 5 - studentsData[i, j].Length;
                        while (len-- >= 0)
                        {
                            Console.Write(" ");
                        }
                    }
                    Console.Write("|");
                }
                Console.Write("|");
                Console.Write($"| {total}  ");
                var percentage = total / 3;
                if (percentage >= 90)
                {
                    Console.Write(" | A     |");
                }
                else if (percentage < 90 && percentage >= 70)
                {
                    Console.Write(" | B     |");
                }
                else if (percentage < 70 && percentage >= 50)
                {
                    Console.Write(" | C     |");
                }
                else if (percentage < 50 && percentage >= 30)
                {
                    Console.Write(" | D     |");
                }
                else if (percentage < 30)
                {
                    Console.Write(" | F     |");
                }
                Console.WriteLine();
                Console.WriteLine("-----------------------------------------------------------------------------------------");
            }
            #endregion

            //Assignment 5
            #region Assignment 5
            Console.WriteLine("Assignment 5\n-----------------");
            Console.WriteLine("Enter a Age: ");
            var age = Console.ReadLine();
            int verifiedAge = 0;
            while (!int.TryParse(age, out verifiedAge))
            {
                Console.WriteLine("Enter valid age: ");
                age = Console.ReadLine();
            }
            Assignment5.Exercise(verifiedAge);
            Console.WriteLine("------------------------------");

            static string ValidateMarks()
            {
                var marks = Console.ReadLine();
                float verifiedMarks = 0;
                while (!float.TryParse(marks, out verifiedMarks))
                {
                    Console.WriteLine("Enter valid marks: ");
                    marks = Console.ReadLine();
                }
                return marks;
            }
            #endregion
        }
    }
}
