using System;

namespace Day1_Assignment
{
    // 3rd program enum 
    public enum Weekdays
    {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Print sum of all the even numbers

            int first, second, third, temp = 0;

            Console.Write("Enter first number : ");
            first = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter second number : ");
            second = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter third number : ");
            third = Convert.ToInt32(Console.ReadLine());

            if (first % 2 == 0)
            {
                temp += first;
            }
            if (second % 2 == 0)
            {
                temp += second;
            }
            if (third % 2 == 0)
            {
                temp += third;
            }

            Console.WriteLine("Sum of even numbers : " + temp);



            // Store your name in one string and find out how many vowel characters are there in your name.

            string name = "Fiyona";
            name = name.ToLower();
            int vowel = 0;

            for (int i = 0; i < name.Length; i++)
            {
                // Console.Write(name[i] + " ");
                if (name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u')
                {
                    vowel++;
                }
            }

            Console.WriteLine("Name : " + name);
            Console.WriteLine("Total Vowels : " + vowel);



            // Create a weekday enum and accept week day number and display week day.

            var wd1 = (Weekdays)0;
            Console.WriteLine(wd1);

            var wd2 = (Weekdays)5;
            Console.WriteLine(wd2);



            // Accept 10 student Name,Address,Hindi,English,Maths Marks ,do the total and compute Grade. Note do it with Array and display the result in grid format

            int[][] arr = new int[10][];
            int temp = 0;
            string grade;

            bool endApp = false;
             while (!endApp)
            {

                string name, address;
                int hindi, english, maths, total;

                Console.Write("Enter Name : ");
                name = Console.ReadLine();

                Console.Write("Enter Address : ");
                address = Console.ReadLine();

                Console.Write("Enter Hindi Marks : ");
                hindi = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter English Marks : ");
                english = Convert.ToInt32(Console.ReadLine());

                Console.Write("Enter Maths Marks : ");
                maths = Convert.ToInt32(Console.ReadLine());
                arr[temp] = new int[] { hindi, english, maths };

                total = (hindi + english + maths) / 3;
                Console.WriteLine("Total : " + total);

                if (total > 90)
                {
                    grade = "A+";
                    Console.WriteLine("Grade A+");
                }
                else if (total > 80 && total < 90)
                {
                    grade = "A";
                    Console.WriteLine("Grade A");
                }
                else if (total > 70 && total < 80)
                {
                    grade = "B+";
                    Console.WriteLine("Grade B+");
                }
                else if (total > 60 && total < 70)
                {
                    grade = "B";
                    Console.WriteLine("Grade B");
                }
                else if (total > 50 && total < 60)
                {
                    grade = "c";
                    Console.WriteLine("Grade C");
                }
                else if (total > 40 && total < 50)
                {
                    grade = "D";
                    Console.WriteLine("Grade D");
                }
                else if (total > 35 && total < 40)
                {
                    grade = "E";
                    Console.WriteLine("Grade E");
                }
                else
                {
                    grade = "Fail";
                    Console.WriteLine("Fail");
                }

                Console.WriteLine("-------------------------------Result---------------------------------------");
                Console.WriteLine("|   Name   |  Address  |  Hindi  |  English  |  Maths  |  Total  |  Grade  |");
                Console.WriteLine("|  " + name + "  |  " + address + "  |   " + arr[temp][0] + "    |    " + arr[temp][1] + "    |    " + arr[temp][2] + "    |    " + total + "    |    " + grade + "    |");

                temp++;

                Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
                if (Console.ReadLine() == "n") endApp = true;
            }


            // Accept Age from user, if age is more than 18 eligible for vote otherwise it should be displayed as not eligible. Do it with ternary operator

            int age;

            Console.Write("Enter age to check eligibility : ");
            age = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine((age > 18) ? "Eligible for voting" : "Not eligible for voting");
        }
    }
}
