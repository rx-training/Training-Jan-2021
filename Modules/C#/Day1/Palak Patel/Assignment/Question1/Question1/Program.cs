using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public enum weekdays
{
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5
}


namespace Question1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Question 1
            Console.WriteLine("Question 1");
            int num, sum = 0;
            Console.WriteLine("Enter Number till which you want the sum to be counted : ");
            num = Convert.ToInt32(Console.ReadLine());
            for (int i = 2; i <= num; i += 2)
            {
                sum += i;
            }

            Console.WriteLine("Sum of all even numbers is {0}", sum);
            Console.WriteLine("");

            //Question 2
            Console.WriteLine("Question 2");
            String myName = "Palak";
            int count = 0, c = 0;
            foreach (var i in myName)
            {
                if (i == 'a' || i == 'A' || i == 'e' || i == 'E' || i == 'i' || i == 'I' || i == 'o' || i == 'O' || i == 'u' || i == 'U')
                {
                    count++;
                }
                else
                {
                    c++;
                }
            }
            Console.WriteLine("Vowels in given string are {0} and consonants are {1}", count, c);
            Console.WriteLine("");


            //Question 3
            Console.WriteLine("Question 3");
            int n;
            Console.WriteLine("Enter Weekday number: ");
            n = Convert.ToInt32(Console.ReadLine());
            if(n == 1)
            {
                Console.WriteLine("This number is for {0}", weekdays.Monday);
            }
            else if(n == 2)
            {
                Console.WriteLine("This number is for {0}", weekdays.Tuesday);
            }
            else if(n == 3)
            {
                Console.WriteLine("This number is for {0}", weekdays.Wednesday);
            }
            else if(n==4)
            {
                Console.WriteLine("This number is for {0}", weekdays.Thursday);
            }
            else if(n==5)
            {
                Console.WriteLine("This number is for {0}", weekdays.Friday);
            }
            else
            {
                Console.WriteLine("Please enter number from 1 to 5");
            }
            Console.WriteLine("");

            //Question 4
            Console.WriteLine("Question 4");
            string[,] Studentdata = new string[10,5];
            int summ = 0;
            double result;
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Enter Data For Student {0}", i + 1);
                for (int j = 0; j < 5; j++)
                {
                    Studentdata[i,j] = Console.ReadLine();
                }
            }
            Console.WriteLine("No.\t Name\t Address Maths\t English Hindi\t Result");
            for (int i = 0; i < 10; i++)
            {
              
                for (int j = 2; j < 5; j++)
                {
                    summ = summ + Convert.ToInt32(Studentdata[i, j]);
                }
                result = summ / 3;
                Console.Write("{0}\t",i+1);
                for (int j = 0; j < 5; j++)
                {
                    Console.Write("{0}\t", Studentdata[i, j]);
                }
                Console.WriteLine("{0}", result);
            }
            Console.WriteLine("");

            //Question 5
            Console.WriteLine("Question 5");
            int age;
            Console.WriteLine("Enter your age: ");
            age = Convert.ToInt32(Console.ReadLine());
            var resultt = age > 18 ? "You are eligible for vote" : "You are not eligible for vote";
            Console.WriteLine(resultt);
            Console.WriteLine("");


        }
    }
}
