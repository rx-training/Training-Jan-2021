using System;

namespace Practice_Exercise
{
    public delegate void Cal(double nu1, double num2);

    class Calculation
    {
        double result;
       public void Addition(double a,double b)
        {
            result = a + b;
            Console.WriteLine($"Addition of {a} And {b} is :- {result}");
        }
       // public void Subtraction(double a, double b)
       // {
         //   result = a - b;
         //   Console.WriteLine($"Subtraction of {a} And {b} is :- {result}");
        //}
       /* public void Multiplication(double a, double b)
        {
            result = a*b;
            Console.WriteLine($"multiplication of {a} And {b} is :- {result}");
        }*/
        public void division(double a, double b)
        {
            result = a / b;
            Console.WriteLine($"Division Of {a} And {b} is :- {result}");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
           
            //for delegate
          Calculation c = new Calculation();
            Cal c1 = new Cal(c.Addition);
            Console.WriteLine("Enter The Number1");
            double a = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter The Number 2");
            double b = Convert.ToDouble(Console.ReadLine());
            c1(a, b);

            //Anonymous function

            Cal c2 = delegate (double a, double b)
             {
                 double result = a - b;
                 Console.WriteLine($"Subtraction of {a} And {b} is {result}");
             };
            Console.WriteLine("Enter The Number 1");
            double num1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter The Number 2");
            double num2 = Convert.ToDouble(Console.ReadLine());

            c2(num1, num2);

            //Lambda function
            Cal c3 = (a, b) => 
            {
                double result = a * b;
                Console.WriteLine($"Multiplication of {a} And {b} is :- {result}");

            };
            Console.WriteLine("Enter The First Number :-");
            double d1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter The Secound Number :-");
            double d2= Convert.ToDouble(Console.ReadLine());
            c3(d1,d2);

            //Func Delegate
            Func<int, double, int, double> obj = (x, y, z) => x + y + z;
            Console.WriteLine("Enter The First Number");
            int number1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter The Secound Number");
            double number2 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter The Third Number");
            int number3 = Convert.ToInt32(Console.ReadLine());


            double result = obj(number1,number2,number3);
            Console.WriteLine($"Addition of {number1} , {number2} And {number3} is :- {result}");

            //for event

            var theclock = new Clock();
            var visibleclock = new Visibleclock();
            visibleclock.subscribe(theclock);
            theclock.RunClock();




        }
    }
}
