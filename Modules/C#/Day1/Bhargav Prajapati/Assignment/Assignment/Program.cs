using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Assignment
{
    enum days
    {
        SUNDAY=1,
        MONDAY=2,
        TUESDAY=3,
        WEDNESDAY=4,
        THURESDAY=5,
        FRIDAY=6,
        SATURDAY=7
    }
    /*Print sum of all the even numbers*/
    class Assingment1
    {
        public void sum1()
        {
            Console.WriteLine("ENTER THE LAST NUMBER YOU WANT TO PRINT THE SUM OF EVEN NUMBER ");
            int number1 = Convert.ToInt32(Console.ReadLine());
            int sum = 0;
            for (int i = 1; i <= number1; i++)
            {
                if (i % 2 == 0)
                {
                    sum = sum + i;
                }
            }
            Console.WriteLine($"SUM UPTO NUMBER {number1} IS {sum}");
        }
    }

    /*Store your name in one string and find out how many vowel characters are there in your name.*/

    class Assignmet2
    {
        public void vowel()
        {
            Console.WriteLine("ENTER YOUR NAME");
            String Name = Console.ReadLine();
            int count = 0;
            for (int j = 0; j <Name.Length; j++)
            {
                if (Name[j] == 'A' || Name[j] == 'E' || Name[j] == 'I' || Name[j] == 'O' || Name[j] == 'U' || Name[j] == 'a' || Name[j] == 'e' || Name[j] == 'i' || Name[j] == 'o' || Name[j] == 'u')
                {
                    count++;
                }
            }
            Console.WriteLine($"ENTER STRING {Name} PRESENT VOVEL IS :-{count}");
        }
    }

    /*Create a weekday enum and accept week day number and display week day.*/
    class Assignment3
    {
        public void day()
        {
            Console.WriteLine("ENTER THE NUMBER BETWEEN 1 TO 7 TO FIND DAYS");
            int day = Convert.ToInt32(Console.ReadLine());
            switch (day)
            {
                case 1:
                    Console.WriteLine($"YOU CHOOSE {days.SUNDAY.ToString()}");
                    break;
                case 2:
                    Console.WriteLine($"YOU CHOOSE {days.MONDAY.ToString()}");
                    break;
                case 3:
                    Console.WriteLine($"YOU CHOOSE {days.TUESDAY.ToString()}");
                    break;
                case 4:
                    Console.WriteLine($"YOU CHOOSE {days.WEDNESDAY.ToString()}");
                    break;
                case 5:
                    Console.WriteLine($"YOU CHOOSE {days.THURESDAY.ToString()}");
                    break;
                case 6:
                    Console.WriteLine($"YOU CHOOSE {days.FRIDAY.ToString()}");
                    break;
                case 7:
                    Console.WriteLine($"YOU CHOOSE {days.SATURDAY.ToString()}");
                    break;
                default:
                    Console.WriteLine("WRONG CHOISE");
                    break;
            }
        }
    }
    /*Accept 10 student Name,Address,Hindi,English,Maths Marks ,do the total and compute Grade. Note do it with Array 
      and display the result in grid format*/

    class Assingment4
    {
        public void result()
        {
            /* string[] name = new string[10];
             string[] Address = new string[10];
             int[] hindi = new int[10];
             int[] english = new int[10];
             int[] maths = new int[10];
             int[] totel = new int[10];

             for (int i = 0; i < 10; i++)
             {
                 Console.WriteLine($"ENTER  ROLL NO {i+1} Name");
                 name[i] = Console.ReadLine();
                 Console.WriteLine($"ENTER THE ADDRESS OF {name[i]}");
                 Address[i] = Console.ReadLine();
                 Console.WriteLine($"ENTER THE HINDI MARKS OF {name[i]}");
                 hindi[i] = Convert.ToInt32(Console.ReadLine());
                 Console.WriteLine($"ENTER THE ENGLISH MARKS OF {name[i]}");
                 english[i] = Convert.ToInt32(Console.ReadLine());
                 Console.WriteLine($"ENTER THE MATHS MARKS OF {name[i]}");
                 maths[i] = Convert.ToInt32(Console.ReadLine());

             }


             for (int j = 0; j < 10; j++)
             {
                 totel[j] = hindi[j] + english[j] + maths[j];
                 Console.WriteLine($"NAME :- {name[j]}");
                 Console.WriteLine($"ADDRESS :- {Address[j]}");
                 Console.WriteLine($"TOTEL:- {totel[j]}");
                 if (totel[j] < 300 || totel[j] > 280)
                 {
                     Console.WriteLine("GRAD :- A+");
                 }
                 else if (totel[j] < 280 || totel[j] > 180)
                 {
                     Console.WriteLine("GRAD :- A");
                 }
                  else if (totel[j] < 180 || totel[j] > 80)
                 {
                     Console.WriteLine("GRAD :- B+");

                 }
                  else 
                 {
                     Console.WriteLine("GRAD :- B");
                 }
                 Console.WriteLine();
                 Console.WriteLine();
                 Console.WriteLine("HINDI       ENGLISH         MATHS");
                 Console.WriteLine($"{hindi[j]}          {english[j]}              {maths[j]}");

             }*/


            string[,] studentdata = new string[10, 3];
            int[,] marks = new int[10, 4];

            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"ENTER THE NAME OF ROLL NO {i+1}");
                studentdata[i, 0] = Console.ReadLine();
                Console.WriteLine($"ENTER THE ADDRESS OF {studentdata[i, 0]} ");
                studentdata[i, 1] = Console.ReadLine();
                Console.WriteLine($"ENTER THE HINDI MARKS OF {studentdata[i, 0]}");
                marks[i, 0] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine($"ENTER THE ENGLISH MARKS OF {studentdata[i, 0]}");
                marks[i, 1] = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine($"ENTER THE MATHS MARKS OF {studentdata[i, 0]}");
                marks[i, 2] = Convert.ToInt32(Console.ReadLine());
                marks[i, 3] = marks[i, 0] + marks[i , 1]+ marks[i , 2];
                if (marks[i, 3] < 300  || marks[i, 3] > 280)
                {
                    studentdata[i, 2] = "A++";
                }
                else if (marks[i, 3] < 280 || marks[i, 3] > 180)
                {
                    studentdata[i, 2] = "A";
                }
                else if (marks[i, 3] < 180 || marks[i, 3] > 80)
                {
                    studentdata[i, 2] = "B+";
                }
                else
                {
                    studentdata[i, 2] = "B";
                }

            }
            for (int j = 0; j < 10; j++)
            {
                Console.WriteLine("==============================================");
                Console.WriteLine("RESULT OF THE STUDENT");
                Console.WriteLine($"NAME :- {studentdata[j, 0]}");
                Console.WriteLine($"ADDRESS :- {studentdata[j,1]}");
                Console.WriteLine($"TOTEL :- {marks[j,3]}");
                Console.WriteLine($"GRAD :- {studentdata[j,2]}");
                Console.WriteLine("HINDI       ENGLISH         MATHS");
                Console.WriteLine($"{marks[j,0]}          {marks[j,1]}              {marks[j,2]}");
                Console.WriteLine("");
                Console.WriteLine("============================================");
                Console.WriteLine("");
                


            }
            Console.ReadLine();
        }

    
    }

    /*Accept Age from user, if age is more than 18 eligible for vote otherwise it should be displayed as not eligible. Do it with ternary operator*/
    class Assignment5
    {
        public void voting()
        {
            Console.WriteLine("Enter Your Age");
            int age;
            age = Convert.ToInt32(Console.ReadLine());

            var eligible = age > 18 ? "YOU ARE ELIGIBLE FOR VOTING" : "YOU ARE  NOT ELIGIBLE FOR VOTING";
            Console.WriteLine(eligible);

        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Assingment1 sa = new Assingment1();
          sa.sum1();
            
            Assignmet2 sa2 = new Assignmet2();
            sa2.vowel();

            Assignment3 sa3 = new Assignment3();
            sa3.day();

            Assingment4 sa4 = new Assingment4();
            sa4.result();

            Assignment5 sa5 = new Assignment5();
            sa5.voting();
            Console.ReadLine();
        }
    }
}
