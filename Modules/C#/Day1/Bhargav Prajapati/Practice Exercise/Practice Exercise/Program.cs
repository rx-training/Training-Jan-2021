using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    enum color
    {
        RED = 1,
        YELLOW = 2,
        BLUE = 3

    }
    class Program
    {
        static void Main(string[] args)
        {


            /*Hello world*/

            Console.WriteLine("Hello world");

            //Airthmatic operator

            /*Addition Of Two Number*/
            Console.WriteLine("ADDITION OPERATION");
            int num1, num2;
            Console.WriteLine($"ENTER THE NUMBER ONE");
            num1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"ENTER THE NUMBER TWO");
            num2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"ADDTION OF {num1} AND {num2} IS {num1 + num2}");



            //Multiplication
            Console.WriteLine("MULTIPLICATION OPERATION");
            float r;
            Console.WriteLine($"ENTER THE Radios Of Circle");
            r = float.Parse(Console.ReadLine());
            Console.WriteLine($"The Aria Of The Circle {3.14 * r * r} OF Radious {r}");

            //Division
            Console.WriteLine("DIVISION OPERATION");
            int a, b;
            Console.WriteLine("PLEASE ENTER THE NUMBER 1");
            a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("PLEASE ENTER THE NUMBER 2");
            b = Convert.ToInt32(Console.ReadLine());
            int c;
            c = a / b;
            Console.WriteLine($"Division Of {a} AND {b} Is {c}");

            //MODULO OPERATION
            Console.WriteLine("MODULO OPERATION");
            int p, q;
            Console.WriteLine("ENTER THE NUMBER 1 TO FIND THE MODULO");
            p = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("ENTER THE NUMBER 2 TO FIND THE MODULO");
            q = Convert.ToInt32(Console.ReadLine());
            int n;
            n = p % q;
            Console.WriteLine($"Modulo OF {p} AND {q} Is {n}");


            bool test = true;
            if (test == true)
            {
                Console.WriteLine($"THE VALUE OF VARIABLE IS {test}");
            }
            else
            {
                Console.WriteLine($"THE VALUE OF VARIABLE IS {test}");
            }


            /*LOGICAL AND OPERATOR*/

            /*&&*/
            int number1 = 5;
            int number2 = 10;
            if (number1 > 2 && number2 < 50)
            {
                Console.WriteLine("BOTH CONDITION ARE TRUE THE LOGICAL && OPERATOR ARE EXECUTED");

            }

            /* || */
            if (number1 < 10 || number2 > 50)
            {
                Console.WriteLine("ANY OF ONE CONDITION ARE TRUE THEN LOGICAL || OPERATOR ARE EXECUTED");
            }

            /*UNARY OPERATOR*/
            int i = 5;
            Console.WriteLine(i++);
            Console.WriteLine(++i);
            Console.WriteLine(i--);
            Console.WriteLine(--i);

            /*TERNARY OPERATOR*/
            int pq = 10;
            int rs = 20;
            var result = pq < rs ? $"THE NUMBER {rs} IS GRATER THEN {pq}" : $"THE NUMBER {rs} IS LESS THEN {pq}";

            /*ARRAY*/
            int[] arr = new int[5];

            Console.WriteLine("ENTER 5 NUMBER");
            for (int l = 0; l < 5; l++)
            {
                arr[l] = Convert.ToInt32(Console.ReadLine());
            }

            Console.WriteLine("YOUR ENTERED NUMBER IS :-");
            for (int k = 0; k < 5; k++)
            {
                Console.WriteLine(arr[k]);
            }

            /*if else Statement*/
            Console.WriteLine("ENTER THE NUMBER ONE");
            int nump = Convert.ToInt32(Console.ReadLine());

            if (nump > 18)
            {
                Console.WriteLine("YOU ARE ELIGIBLE FOR VOTING");
            }
            else
            {
                Console.WriteLine("YOU ARE NOT ELIGIBLE FOR VOTING");
            }


            /* SWITCH CASE*/


            Console.WriteLine("ENTER THE NUMBER ONE ");
            double numd1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("ENTER THE NUMBER TWO ");
            double numd2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("PRESS 1 PERFOM THE ADDITION");
            Console.WriteLine("PRESS 2 PERFOM THE SUBTRACTION");
            Console.WriteLine("PRESS 3 PERFOM THE MULTIPLICATION");
            Console.WriteLine("PRESS 4 PERFOM THE DIVISION");
            Console.WriteLine("PRESS 5 PERFOM THE MODULO");

            int ch = Convert.ToInt32(Console.ReadLine());
            switch (ch)
            {
                case 1:
                    Console.WriteLine($"ADDITION OF {numd1} And {numd2} Is :- {numd1 + numd2}");
                    break;
                case 2:
                    Console.WriteLine($"SUBTRACTION OF {numd1} And {numd2} Is :- {numd1 - numd2}");
                    break;
                case 3:
                    Console.WriteLine($"MULTIPLICATION OF {numd1} And {numd2} Is :- {numd1 * numd2}");
                    break;
                case 4:
                    Console.WriteLine($"DIVISION OF {numd1} And {numd2} Is :- {numd1 / numd2}");
                    break;
                case 5:
                    Console.WriteLine($"DIVISION OF {numd1} And {numd2} Is :- {numd1 % numd2}");
                    break;
                default:
                    Console.WriteLine("INVALID CHOISE");
                    break;
            }

            /*Loop*/
            /*for Loop*/
            Console.WriteLine("FOR LOOP");
            for (int hk = 0; hk < 10; hk++)
            {
                Console.WriteLine(hk);
            }

            /*while Loop*/
            Console.WriteLine("WHILE LOOP");
            int kl = 1;
            while (kl > 10)
            {
                Console.WriteLine(kl);
                kl++;
            }
            /*do While Loop*/
            Console.WriteLine("DO WHILE LOOP");
            int zl = 1;
            do
            {
                Console.WriteLine(kl);
                zl++;
            } while (zl > 10);

            /*for each loop*/
            Console.WriteLine("FOR EACH LOOP");
            int[] arr1 = new int[5] { 10, 20, 30, 40, 50 };
            foreach (int arrr3 in arr1)
            {
                Console.WriteLine(arrr3);
            }
            /* Access The Enumration*/
            Console.WriteLine("CHOOSE THE COLOR BETWWEN 1 to 3");
            int cl = Convert.ToInt32(Console.ReadLine());

            switch (cl)
            {
                case 1:
                    Console.WriteLine(color.RED.ToString());
                    break;
                case 2:
                    Console.WriteLine(color.YELLOW.ToString());
                    break;
                case 3:
                    Console.WriteLine(color.BLUE.ToString());
                    break;
                default:
                    Console.WriteLine("Invalid choise");
                    break;

            }



            Console.ReadLine();





        }
    }
}
