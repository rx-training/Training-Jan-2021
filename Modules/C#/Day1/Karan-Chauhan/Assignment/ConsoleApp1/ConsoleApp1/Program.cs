using System;

namespace ConsoleApp1
{
    enum EnumDays
    {
        Sunday = 1, Monday = 2, Tuesday = 3, Wednesday = 4, Thursday = 5, Friday = 6, Saturday = 7
    }
    class Program
    {
        static void Main(string[] args)
        {
            //Q-1
            Console.WriteLine("Enter starting and ending number");
            int start = Convert.ToInt32(Console.ReadLine());
            int end = Convert.ToInt32(Console.ReadLine());
            int sum = 0;
            for(int i = start; i <= end; i++)
            {
                if(i%2==0)
                {
                    sum = sum + i;
                }
            }
            Console.WriteLine("Sum of all even numbers: " + sum);

            //Q-2
            string name = "karan";
            int len = name.Length;
            int vowel = 0;
            for (int i = 0; i<len; i++)
            {
                if(name[i]=='a' || name[i]=='e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u')
                {
                    vowel = vowel + 1;
                }
            }
            Console.WriteLine("Number of vowels in my name: " + vowel);

            //Q-3
            Console.WriteLine("Enter the week day number:");
            int n = Convert.ToInt32(Console.ReadLine());
            switch (n)
            {
                case 1:
                    Console.WriteLine(EnumDays.Sunday.ToString());
                    break;

                case 2:
                    Console.WriteLine(EnumDays.Monday.ToString());
                    break;

                case 3:
                    Console.WriteLine(EnumDays.Tuesday.ToString());
                    break;

                case 4:
                    Console.WriteLine(EnumDays.Wednesday.ToString());
                    break;

                case 5:
                    Console.WriteLine(EnumDays.Thursday.ToString());
                    break;

                case 6:
                    Console.WriteLine(EnumDays.Friday.ToString());
                    break;

                case 7:
                    Console.WriteLine(EnumDays.Saturday.ToString());
                    break;

                default:
                    Console.WriteLine("Invalid Value!");
                    break;


            }

            //Q-4
            string[] sname = new string[10];
            string[] address = new string[10];
            int[] hindi = new int[10];
            int[] english = new int[10];
            int[] maths = new int[10];
            string[] grade = new string[10];
            int total;
            Console.WriteLine("Enter the details of Students:");
            for(int i=0; i<10; i++)
            {
                Console.WriteLine("Enter the name:");
                sname[i] = Console.ReadLine();

                Console.WriteLine("Enter the address:");
                address[i] = Console.ReadLine();

                Console.WriteLine("Enter the Hindi Marks:");
                hindi[i] = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter the English Marks:");
                english[i] = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter the Maths Marks:");
                maths[i] = Convert.ToInt32(Console.ReadLine());

                total = hindi[i] + english[i] + maths[i];

                if (total > 250)
                {
                    grade[i] = "A";
                }
                else if (total > 200)
                {
                    grade[i] = "B";
                }
                else if(total > 120)
                {
                    grade[i] = "C";
                }
                else
                {
                    grade[i] = "F";
                }                
            }

            Console.WriteLine("Name      Hindi     English     Maths     Grade     ");
            for(int i=10; i<10; i++)
            {
                Console.WriteLine(name[i] + "    " +hindi[i]+"    " + english[i] + "    " + maths[i] + "    " + grade[i] + "    ");
            }

            //Q-5
            Console.WriteLine("Enter your age:");
            int age = Convert.ToInt32(Console.ReadLine());
            var temp = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
            Console.WriteLine(temp);
            Console.ReadKey();


        }
    }
}
