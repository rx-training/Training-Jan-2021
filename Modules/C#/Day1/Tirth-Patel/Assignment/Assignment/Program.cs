using System;
enum weekdays
{
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    saturday
}
namespace Assignment
{

    class Program
    {
        static void Main(string[] args)
        {
            /* int start, end,result,day,age;
             string input = "";
             Console.WriteLine("enter starting limit of number");
            start = Convert.ToInt32(Console.ReadLine());
             Console.WriteLine("Enter the ending of number List:");
             end =Convert.ToInt32(Console.ReadLine());
            // result = SumofEvenNumbers(start, end);
           //  Console.WriteLine($"The sum Of the even numbers between {start} AND {end} is {result}");
           Console.WriteLine("Enter a string:");
           input=  Console.ReadLine();

              result = Vowelinstring(input);
             Console.WriteLine($"total number of vowels in string {input} is:{result}");
             Console.WriteLine("Enter a Weekday number");
            string days = Console.ReadLine();
             dayofweek(days);
             Console.WriteLine("Enter your age");
             age = Convert.ToInt32(Console.ReadLine());
             Eligible(age);*/
            results();



        }
        //Print sum of all the even numbers

        public static int SumofEvenNumbers(int Start, int End)
        {
            int result = 0;
            for (int i = Start; i <= End; i++)
            {
                if (i % 2 == 0)
                {
                    result = result + i;
                }
            }
            return result;
        }
        //Store your name in one string and find out how many vowel characters are there in your name.
        public static int Vowelinstring(string name)
        {
            int count = 0;
            foreach (var item in name)
            {
                if (item == 'A' || item == 'a' ||
                    item == 'E' || item == 'e' ||
                    item == 'i' || item == 'I' ||
                    item == 'o' || item == 'O' ||
                    item == 'U' || item == 'u'
                    )
                {
                    count++;
                }
                //Console.WriteLine(item);

            }
            return count;
        }
        //Create a weekday enum and accept week day number and display week day.
        public static void dayofweek(string day)
        {

            int dayno = Convert.ToInt32(weekdays.Parse(typeof(weekdays), day));
            switch (dayno)
            {
                case 0:
                    Console.WriteLine("It is Sunday");
                    break;
                case 1:
                    Console.WriteLine("It is Monday");
                    break;
                case 2:
                    Console.WriteLine("It is Tuesday");
                    break;

                case 3:
                    Console.WriteLine("It is Wednesday");
                    break;

                case 4:
                    Console.WriteLine("It is Thursday");
                    break;

                case 5:
                    Console.WriteLine("It is Friday");
                    break;
                case 6:
                    Console.WriteLine("It is saturday");
                    break;
                default:
                    Console.WriteLine("enter valid number");
                    break;

            }
        }
        //Accept Age from user, if age is more than 18 eligible for
        //    vote otherwise it should be displayed as not eligible.Do it with ternary operator
        public static void Eligible(int age)
        {
            var result = age > 18 ? "Eligible" : "Not Eligible";
            Console.WriteLine(result);
        }
        public static void results()
        {
            string[,] info = new string[10, 3];
            int[,] marks = new int[10, 4];


            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"Enter Name of student {i + 1}");
                info[i, 0] = Console.ReadLine();
                Console.WriteLine($"Enter Address of student {i + 1}");
                info[i, 1] = Console.ReadLine();
                Console.WriteLine($"Enter hindi marks of student {i + 1}");
                marks[i, 0] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine($"Enter english marks for student {i + 1}");
                marks[i, 1] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine($"Enter Maths marks of  student {i + 1}");
                marks[i, 2] = Convert.ToInt32(Console.ReadLine());
                marks[i, 3] = marks[i, 0] + marks[i, 1] + marks[i, 2];
            }
            for (int l = 0; l < 10; l++)
            {
                info[l, 2] = marks[l, 3] > 250 ? "A" : "B";
            }


            for (int k = 0; k < 10; k++)
            {
                Console.WriteLine("\t\tReport-Card");
                Console.WriteLine($"Name:       {info[k,0]}");
                Console.WriteLine($"Address:    {info[k,1]}\n");
                Console.WriteLine("        HINDI\tEnglish\tmaths\ttotal");
                Console.WriteLine($"        {marks[k,0]}\t{marks[k,1]}\t{marks[k,2]}\t{marks[k,3]}\n");
                Console.WriteLine($"\t\t Grade: {info[k,2]}");


            }
        }
    }
}



